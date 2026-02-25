"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Target,
  Brain,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Clock,
  AlertTriangle,
} from "lucide-react";
import { FaJsSquare } from "react-icons/fa";

import questions, { type QuestionType } from "../data/question";

// shadcn-style components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

type QuizQuestion = QuestionType & { index: number };
type AnswerMap = Record<number, string>;
type SkillResult = {
  skillLevel: string;
  focusAreas: string[];
};

const TOTAL_TIME_SECONDS = 3 * 60; // 3 minutes

function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function sampleQuestions(source: QuestionType[], count: number): QuizQuestion[] {
  const copy = shuffleArray(source);
  return copy.slice(0, count).map((q, idx) => ({
    ...q,
    options: shuffleArray(q.options),
    index: idx + 1,
  }));
}

function computeScore(quizQuestions: QuizQuestion[], answers: AnswerMap) {
  let correct = 0;
  const breakdown = quizQuestions.map((q) => {
    const given = answers[q.id];
    const isCorrect = given === q.answer;
    if (isCorrect) correct += 1;
    return { id: q.id, question: q.question, correctAnswer: q.answer, given, isCorrect };
  });
  const total = quizQuestions.length;
  const percentage = total === 0 ? 0 : Math.round((correct / total) * 100);
  return { correct, total, percentage, breakdown };
}

export default function Landing() {
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [mounted, setMounted] = useState(false);
  const [yearsExperience, setYearsExperience] = useState<number | "">(0);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [skillResult, setSkillResult] = useState<SkillResult | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);
  const [suspicionCount, setSuspicionCount] = useState(0);
  const [sessionInvalidated, setSessionInvalidated] = useState(false);
  const [showIntroDialog, setShowIntroDialog] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME_SECONDS);
  const [timerExpired, setTimerExpired] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionEntryTimes, setQuestionEntryTimes] = useState<Record<number, number>>({});
  const [questionDurations, setQuestionDurations] = useState<Record<number, number>>({});
  const [autoSubmitted, setAutoSubmitted] = useState(false);

  const score = computeScore(quizQuestions, answers);

  const handleAnswerChange = (id: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));

    setQuestionDurations((prev) => {
      // Only record the first completion time per question
      if (prev[id] != null) return prev;
      const startedAt = questionEntryTimes[id];
      if (!startedAt || !hasStarted) return prev;
      const seconds = (Date.now() - startedAt) / 1000;
      return { ...prev, [id]: seconds };
    });
  };

  const allAnswered =
    quizQuestions.length > 0 &&
    quizQuestions.every((q) => typeof answers[q.id] === "string" && answers[q.id] !== "");

  useEffect(() => {
    setQuizQuestions(sampleQuestions(questions, 10));
    setMounted(true);
    setShowIntroDialog(true);
  }, []);

  // Track when each question is first shown so we can measure completion time
  useEffect(() => {
    if (!hasStarted || quizQuestions.length === 0) return;
    const q = quizQuestions[Math.min(currentQuestionIndex, quizQuestions.length - 1)];
    if (!q) return;
    setQuestionEntryTimes((prev) => {
      if (prev[q.id]) return prev;
      return { ...prev, [q.id]: Date.now() };
    });
  }, [currentQuestionIndex, hasStarted, quizQuestions]);

  useEffect(() => {
    const registerSuspicion = () => {
      setSuspicionCount((prev) => {
        const next = prev + 1;
        if (next >= 3) setSessionInvalidated(true);
        return next;
      });
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        registerSuspicion();
      }
    };

    const handleBlur = () => {
      registerSuspicion();
    };

    const handleCopy = (event: Event) => {
      event.preventDefault();
      registerSuspicion();
    };

    const handleContextMenu = (event: Event) => {
      event.preventDefault();
      registerSuspicion();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (
        event.key === "PrintScreen" ||
        (event.ctrlKey && (key === "c" || key === "x" || key === "insert"))
      ) {
        event.preventDefault();
        registerSuspicion();
      }
    };

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (hasStarted && !sessionInvalidated && !timerExpired) {
        registerSuspicion();
        event.preventDefault();
        event.returnValue = "";
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleBlur);
    document.addEventListener("copy", handleCopy);
    document.addEventListener("cut", handleCopy);
    document.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleBlur);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("cut", handleCopy);
      document.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [hasStarted, sessionInvalidated, timerExpired]);

  useEffect(() => {
    if (!hasStarted || sessionInvalidated || timerExpired || autoSubmitted) return;

    const intervalId = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(intervalId);
          setTimerExpired(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [hasStarted, sessionInvalidated, timerExpired, autoSubmitted]);

  const submitAssessment = async (
    answersToUse: AnswerMap,
    durationsToUse: Record<number, number>,
  ) => {
    if (isSubmitting || sessionInvalidated) return;

    setIsSubmitting(true);
    setApiError(null);

    try {
      const payload = {
        YearsExperience: yearsExperience,
        topics: quizQuestions.slice(0, 10).map((q) => ({
          name: q.topic,
          difficulty: q.difficulty,
          time: Math.max(
            1,
            Math.round(
              durationsToUse[q.id] != null ? durationsToUse[q.id] : 30,
            ),
          ),
        })),
      };

      const res = await fetch("/api/predict-js-skill", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      // alert(JSON.stringify(data, null, 2))

      if (!res.ok || data?.error) {
        setApiError(data?.error ?? "Unable to predict skill level.");
        setSkillResult(null);
      } else {
        setSkillResult({
          skillLevel: data.skillLevel,
          focusAreas: data.focusAreas,
        });
      }

      setShowResults(true);
    } catch (err) {
      console.error(err);
      setApiError("Something went wrong while calling the skill API.");
      setSkillResult(null);
      setShowResults(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async () => {
    if (!allAnswered || yearsExperience === "" || sessionInvalidated) return;
    await submitAssessment(answers, questionDurations);
  };

  const progressPercentage = quizQuestions.length === 0
    ? 0
    : Math.min(100, (Object.keys(answers).length / quizQuestions.length) * 100);

  const currentQuestion =
    quizQuestions.length > 0
      ? quizQuestions[Math.min(currentQuestionIndex, quizQuestions.length - 1)]
      : null;

  const timeProgress = (timeLeft / TOTAL_TIME_SECONDS) * 100;

  // When the timer expires, automatically submit the assessment.
  useEffect(() => {
    if (!timerExpired || autoSubmitted || sessionInvalidated) return;
    if (quizQuestions.length === 0) return;

    // Fill unanswered questions with incorrect answers and time = 1s
    const filledAnswers: AnswerMap = { ...answers };
    const filledDurations: Record<number, number> = { ...questionDurations };

    for (const q of quizQuestions) {
      const hasAnswer = typeof filledAnswers[q.id] === "string" && filledAnswers[q.id] !== "";
      if (!hasAnswer) {
        const wrongOption =
          q.options.find((opt) => opt !== q.answer) ?? q.options[0] ?? "";
        filledAnswers[q.id] = wrongOption;
        filledDurations[q.id] = 1;
      } else if (filledDurations[q.id] == null) {
        // If answered but duration was not captured, give a minimal duration
        filledDurations[q.id] = 1;
      }
    }

    setAnswers(filledAnswers);
    setQuestionDurations(filledDurations);
    setAutoSubmitted(true);

    void submitAssessment(filledAnswers, filledDurations);
  }, [timerExpired, autoSubmitted, sessionInvalidated, quizQuestions, answers, questionDurations, submitAssessment]);

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      {/* Enhanced background effects */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-48 top-6 h-96 w-96 rounded-full bg-primary/20 blur-[120px] animate-pulse" />
        <div className="absolute -right-40 top-40 h-80 w-80 rounded-full bg-secondary/20 blur-[100px] animate-pulse delay-700" />
        <div className="absolute inset-x-24 bottom-0 h-64 rounded-full bg-accent/10 blur-[90px]" />
      </div>

      <main className="container mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 animate-pulse rounded-2xl bg-[#f0db4f]/20 blur-xl" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f0db4f] to-[#f0db4f]/80 shadow-lg">
                    <FaJsSquare className="h-10 w-10 text-[#323330]" />
                  </div>
                </div>

                <div>
                  <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                    <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                      Js SkillGauge
                    </span>
                  </h1>
                  <p className="mt-2 text-base text-muted-foreground lg:text-lg">
                    AI-powered JavaScript skill assessment with personalized insights
                  </p>
                </div>
              </div>
            </div>

            <Card className="w-full border-primary/20 bg-card/50 backdrop-blur-sm lg:max-w-md">
              <CardContent className="flex items-start gap-3 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                  <Brain className="h-5 w-5 text-secondary" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">How it works</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Complete <span className="font-semibold text-primary">10 curated questions</span>,
                    and our ML model will <span className="font-semibold text-secondary">predict your skill level</span> with
                    personalized learning recommendations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Warning Banner */}
        <AnimatePresence>
          {suspicionCount > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6"
            >
              <Alert variant={sessionInvalidated ? "destructive" : "default"} className="border-amber-500/50 bg-amber-50 dark:bg-amber-950/20">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription className="text-sm">
                  <span className="font-semibold">
                    Tab switch detected ({suspicionCount}/3)
                  </span>
                  {sessionInvalidated ? (
                    <span className="ml-1">
                      — This attempt has been invalidated due to rule violations or time running out. Please refresh to restart.
                    </span>
                  ) : (
                    <span className="ml-1">
                      — Stay focused! Multiple violations will invalidate your assessment.
                    </span>
                  )}
                </AlertDescription>
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* Left Column - Questions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {/* Experience Card */}
            <Card
              className={`border-primary/20 bg-card/50 backdrop-blur-sm ${yearsExperience === 0 || yearsExperience === "" ? "ring-2 ring-primary ring-offset-2 ring-offset-background animate-pulse" : ""
                }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <Badge variant="outline" className="mb-2 border-primary/40 text-primary">
                      Step 1
                    </Badge>
                    <CardTitle className="text-2xl">Experience Level</CardTitle>
                    <CardDescription className="mt-1">
                      How many years have you worked with JavaScript?
                    </CardDescription>
                  </div>
                  <div className="hidden rounded-full bg-primary/10 p-3 md:block">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-sm font-medium">
                    Years of professional JavaScript experience
                  </Label>
                  <div className="flex items-center gap-4">
                    <Slider
                      id="experience"
                      min={0}
                      max={15}
                      step={1}
                      value={[yearsExperience === "" ? 0 : yearsExperience]}
                      onValueChange={(val) => setYearsExperience(val[0])}
                      className={`flex-1 ${(yearsExperience === 0 || yearsExperience === "")
                        ? '**:[[role=slider]]:animate-pulse **:[[role=slider]]:ring-2 **:[[role=slider]]:ring-primary **:[[role=slider]]:ring-offset-2 **:[[role=slider]]:ring-offset-background'
                        : ''
                        }`}
                    />
                    <Input
                      type="number"
                      min={0}
                      max={50}
                      value={yearsExperience}
                      onChange={(e) => {
                        const val = e.target.value;
                        if (val === "") {
                          setYearsExperience("");
                        } else {
                          const num = Number(val);
                          setYearsExperience(Number.isNaN(num) ? "" : Math.max(0, num));
                        }
                      }}
                      className="w-20 text-right"
                    />
                    <span className="text-sm text-muted-foreground">years</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Questions Card */}
            <Card className="border-secondary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <Badge variant="outline" className="mb-2 border-secondary/40 text-secondary">
                      Step 2
                    </Badge>
                    <CardTitle className="text-2xl">Answer 10 Questions</CardTitle>
                    <CardDescription className="mt-1">
                      Covering core JavaScript topics across all difficulty levels
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {!mounted && (
                    <>
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-32 animate-pulse rounded-lg bg-muted/20" />
                      ))}
                    </>
                  )}

                  {mounted && currentQuestion && (
                    <>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>
                          Question{" "}
                          <span className="font-semibold text-foreground">
                            {currentQuestionIndex + 1}
                          </span>{" "}
                          of {quizQuestions.length}
                        </span>
                        <span className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {currentQuestion.topic}
                          </Badge>
                          <Badge
                            variant="outline"
                            className={`text-xs ${currentQuestion.difficulty === "easy"
                              ? "border-green-500/50 text-green-600 dark:text-green-400"
                              : currentQuestion.difficulty === "medium"
                                ? "border-amber-500/50 text-amber-600 dark:text-amber-400"
                                : "border-red-500/50 text-red-600 dark:text-red-400"
                              }`}
                          >
                            {currentQuestion.difficulty}
                          </Badge>
                        </span>
                      </div>

                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentQuestion.id}
                          initial={{ opacity: 0, x: 40 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -40 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="relative"
                        >
                          <Card className="group border-muted/40 bg-card/80 transition-all hover:border-primary/40 hover:shadow-lg">
                            <CardHeader className="pb-3">
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex-1 space-y-1">
                                  <div className="flex items-center gap-2">
                                    <Badge variant="secondary" className="text-xs">
                                      Q{currentQuestionIndex + 1}
                                    </Badge>
                                    <Badge variant="outline" className="text-xs">
                                      {currentQuestion.topic}
                                    </Badge>
                                  </div>
                                  <p className="text-sm font-medium leading-relaxed">
                                    {currentQuestion.question}
                                  </p>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <div className="grid gap-2 sm:grid-cols-2">
                                {currentQuestion.options.map((opt, optIndex) => {
                                  const selected = answers[currentQuestion.id] === opt;
                                  const optionLetter = String.fromCharCode(
                                    65 + currentQuestion.options.indexOf(opt),
                                  );

                                  return (
                                    <Button
                                      key={`${currentQuestion.id}-${optIndex}`}
                                      variant={selected ? "default" : "outline"}
                                      className={`h-auto justify-start whitespace-normal p-3 text-left text-xs transition-all ${selected
                                        ? "border-primary bg-primary text-primary-foreground shadow-sm"
                                        : "border-muted hover:border-primary/50 hover:bg-primary/5"
                                        }`}
                                      onClick={() => handleAnswerChange(currentQuestion.id, opt)}
                                      disabled={!hasStarted || sessionInvalidated || timerExpired}
                                    >
                                      <span className="flex w-full items-start gap-2">
                                        <span
                                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold ${selected
                                            ? "border-primary-foreground/50 bg-primary-foreground/20"
                                            : "border-muted-foreground/30"
                                            }`}
                                        >
                                          {optionLetter}
                                        </span>
                                        <span className="flex-1 leading-relaxed">{opt}</span>
                                      </span>
                                    </Button>
                                  );
                                })}
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </AnimatePresence>

                      <div className="mt-4 flex items-center justify-between gap-3">
                        <Button
                          variant="outline"
                          onClick={() =>
                            setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))
                          }
                          disabled={currentQuestionIndex === 0 || !hasStarted}
                          className="px-4"
                        >
                          Previous
                        </Button>

                        <div className="flex flex-1 justify-center gap-1">
                          {quizQuestions.map((q, idx) => {
                            const completed = typeof answers[q.id] === "string" && answers[q.id] !== "";
                            const isActive = idx === currentQuestionIndex;
                            return (
                              <div
                                key={q.id}
                                className={`h-1.5 rounded-full transition-all ${isActive
                                  ? "w-6 bg-primary"
                                  : completed
                                    ? "w-4 bg-primary/60"
                                    : "w-2 bg-muted-foreground/30"
                                  }`}
                              />
                            );
                          })}
                        </div>

                        <Button
                          variant="default"
                          onClick={() =>
                            setCurrentQuestionIndex((prev) =>
                              Math.min(quizQuestions.length - 1, prev + 1),
                            )
                          }
                          disabled={
                            !hasStarted ||
                            !answers[currentQuestion.id] ||
                            currentQuestionIndex === quizQuestions.length - 1
                          }
                          className="px-4"
                        >
                          Next
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Progress & Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            {/* Progress Card */}
            <Card className="sticky top-6 border-accent/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  Progress Tracker
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Questions answered</span>
                    <span className="font-semibold">
                      {Object.keys(answers).length}/{quizQuestions.length}
                    </span>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Time remaining</span>
                    <span className={`font-semibold ${timeLeft <= 60 ? "text-destructive" : ""}`}>
                      {formatTime(timeLeft)}
                    </span>
                  </div>
                  <Progress
                    value={timeProgress}
                    className={`h-1.5 ${timeLeft <= 60 ? "[&>div]:bg-destructive" : "[&>div]:bg-secondary"
                      }`}
                  />
                  {timerExpired && (
                    <p className="text-xs font-medium text-destructive">
                      Time is over. This attempt has been invalidated.
                    </p>
                  )}
                </div>

                <div className="space-y-3">
                  <Button
                    size="lg"
                    disabled={!allAnswered || yearsExperience === "" || isSubmitting || sessionInvalidated}
                    onClick={handleSubmit}
                    className="w-full gap-2 text-base shadow-lg transition-all hover:shadow-xl disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="h-4 w-4" />
                        Submit Assessment
                      </>
                    )}
                  </Button>

                  <div className="rounded-lg bg-muted/20 p-3">
                    <div className="flex items-start gap-2">
                      <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Your responses are processed locally and never stored. This is a
                        privacy-first, one-time assessment.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>

      {/* Intro Dialog */}
      <Dialog
        open={showIntroDialog}
        onOpenChange={(open) => {
          // Prevent closing without starting
          if (!hasStarted) return;
          setShowIntroDialog(open);
        }}
      >
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <FaJsSquare className="h-6 w-6 text-[#facc15]" />
                </div>
                <div>
                  <DialogTitle className="text-xl">Welcome to Js SkillGauge</DialogTitle>
                  <DialogDescription className="mt-1">
                    Please read these short rules before starting your 8-minute assessment.
                  </DialogDescription>
                </div>
              </div>
            </div>
          </DialogHeader>
          <div className="space-y-4">
            <div className="rounded-lg border border-muted/40 bg-muted/10 p-3 text-sm leading-relaxed">
              <p>
                You will answer <span className="font-semibold">10 JavaScript questions</span> in{" "}
                <span className="font-semibold">3 minutes</span>. Your behavior is monitored to keep
                the assessment fair and focused.
              </p>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • Do <span className="font-semibold text-foreground">not</span> take screenshots.
              </li>
              <li>
                • Do <span className="font-semibold text-foreground">not</span> copy text or share
                the questions.
              </li>
              <li>
                • Do <span className="font-semibold text-foreground">not</span> switch tabs or
                windows during the test.
              </li>
              <li>
                • Do <span className="font-semibold text-foreground">not</span> close the tab until
                you finish.
              </li>
              <li>
                • You must finish within{" "}
                <span className="font-semibold text-foreground">3 minutes</span> or the system will
                automatically submit your answers.
              </li>
              <li>
                • Questions are shown one at a time in a slider. You{" "}
                <span className="font-semibold text-foreground">cannot go forward</span> without
                answering, but you can go back and change previous answers.
              </li>
            </ul>
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Timer starts when you click Start assessment.</span>
              </div>
              <Button
                onClick={() => {
                  setHasStarted(true);
                  setShowIntroDialog(false);
                  setTimeLeft(TOTAL_TIME_SECONDS);
                  setTimerExpired(false);
                  setSuspicionCount(0);
                  setSessionInvalidated(false);
                  setCurrentQuestionIndex(0);
                }}
              >
                Start assessment
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Results Dialog */}
      <Dialog open={showResults} onOpenChange={setShowResults}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <div>
                <DialogTitle className="text-2xl">Assessment Complete!</DialogTitle>
                <DialogDescription className="mt-1">
                  Here&apos;s your JavaScript skill breakdown
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <ScrollArea className="max-h-[calc(90vh-120px)] pr-4">
            <div className="space-y-6 py-4">
              {/* Score Overview */}
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Quiz Score
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-4xl font-bold text-primary">
                          {score.correct}
                          <span className="text-2xl text-muted-foreground">/{score.total}</span>
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">questions correct</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-primary">{score.percentage}%</p>
                        <p className="text-xs text-muted-foreground">accuracy</p>
                      </div>
                    </div>
                    <Progress value={score.percentage} className="h-2" />
                  </CardContent>
                </Card>

                <Card className="border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      AI Prediction
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {skillResult ? (
                      <>
                        <div>
                          <p className="text-2xl font-bold text-secondary">
                            {skillResult.skillLevel}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            Predicted skill level based on your performance and experience
                          </p>
                        </div>
                        {skillResult.focusAreas?.length > 0 && (
                          <div className="space-y-2">
                            <p className="text-xs font-medium text-muted-foreground">
                              Recommended focus areas:
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {skillResult.focusAreas.map((topic, idx) => (
                                <Badge
                                  key={`${topic}-${idx}`}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {topic}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="space-y-2">
                        <p className="text-sm text-destructive">
                          {apiError || "Unable to retrieve prediction"}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Please try running the assessment again
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              <Separator />

              {/* Detailed Breakdown */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">Question Breakdown</h3>
                <div className="space-y-2">
                  {score.breakdown.map((item, idx) => (
                    <Card
                      key={item.id}
                      className={`border-l-4 ${item.isCorrect
                        ? "border-l-primary bg-primary/5"
                        : "border-l-destructive bg-destructive/5"
                        }`}
                    >
                      <CardContent className="flex items-start gap-3 p-4">
                        <div className="flex-1 space-y-2">
                          <p className="text-sm font-medium">
                            <span className="text-muted-foreground">Q{idx + 1}:</span> {item.question}
                          </p>
                          <div className="space-y-1 text-xs">
                            <p>
                              <span className="text-muted-foreground">Your answer:</span>{" "}
                              <span className={item.isCorrect ? "font-semibold text-primary" : "font-semibold text-destructive"}>
                                {item.given || "Not answered"}
                              </span>
                            </p>
                            {!item.isCorrect && (
                              <p>
                                <span className="text-muted-foreground">Correct answer:</span>{" "}
                                <span className="font-semibold text-primary">{item.correctAnswer}</span>
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="shrink-0">
                          {item.isCorrect ? (
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                          ) : (
                            <XCircle className="h-5 w-5 text-destructive" />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="border-amber-500/20 bg-amber-50 dark:bg-amber-950/20">
                <CardContent className="flex items-start gap-3 p-4">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400" />
                  <p className="text-xs text-amber-900 dark:text-amber-100 leading-relaxed">
                    This assessment provides a skill estimate for self-evaluation purposes.
                    It&apos;s not a formal certification but a helpful guide for your learning journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}