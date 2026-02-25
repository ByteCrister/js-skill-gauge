# Js SkillGauge — Project Overview

> **Author:** Sadiqul Islam Shakib (ByteCrister)  
> **Live Domain:** `https://js-skill-gauge.vercel.app`  
> **Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · shadcn/ui  

---

## 1. What Is This Project?

**Js SkillGauge** is an AI-powered, single-page JavaScript skill assessment tool. A user completes 10 randomly-sampled, timed multiple-choice questions and receives an ML-predicted skill level — one of **Beginner, Basic, Intermediate, Advanced, or Expert** — along with a list of personalized focus-area recommendations, all computed server-side with no external API.

---

## 2. Repository Structure

```
js-skill-gauge/
├── app/
│   ├── api/
│   │   └── predict-js-skill/
│   │       └── route.ts          # POST endpoint — ML inference
│   ├── globals.css
│   ├── layout.tsx                 # Root layout, global metadata & fonts
│   ├── page.tsx                   # Entry page — renders Landing
│   ├── robots.ts                  # robots.txt generation
│   └── sitemap.ts                 # sitemap.xml generation
├── components/
│   ├── ui/                        # shadcn/ui primitives
│   │   ├── alert.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── progress.tsx
│   │   ├── scroll-area.tsx
│   │   ├── separator.tsx
│   │   └── slider.tsx
│   └── Landing.tsx                 # Main client component — entire quiz UI
├── data/
│   └── question.ts                 # 120+ question bank + QuestionType
├── lib/
│   └── utils.ts                    # cn() helper (clsx + tailwind-merge)
├── machine-learning/
│   ├── js-skill-rf-model.js        # Random Forest model compiled from Python
│   └── js-skill-rf-model.d.ts      # TypeScript types for model input vector
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 3. Tech Stack & Dependencies

### Runtime Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 16.1.6 | App framework (App Router) |
| `react` / `react-dom` | 19.2.3 | UI layer |
| `framer-motion` | ^12 | Animated question transitions & page entrance |
| `radix-ui` | ^1.4 | Headless UI primitives (via shadcn) |
| `lucide-react` | ^0.474 | Icons (Brain, Sparkles, Clock, etc.) |
| `react-icons` | ^5.5 | JavaScript logo (`FaJsSquare`) |
| `class-variance-authority` | ^0.7 | Variant-based component styling |
| `clsx` + `tailwind-merge` | latest | `cn()` class-merging utility |

### Dev Dependencies

| Package | Purpose |
|---------|---------|
| `tailwindcss` ^4 | Utility-first CSS |
| `shadcn` ^3.8 | Component code-generation CLI |
| `tw-animate-css` | Tailwind animation helpers |
| `typescript` ^5 | Static typing |
| `eslint` + `eslint-config-next` | Linting |

---

## 4. Data Layer — Question Bank (`data/question.ts`)

### Types

```typescript
export type DifficultyType = "easy" | "medium" | "hard";

export type QuestionType = {
  id: number;
  question: string;
  options: string[];   // 4 choices
  answer: string;
  difficulty: DifficultyType;
  topic: string;
};
```

- **Scale:** 120+ questions numbered `id: 1` → `id: 120+`
- Each question belongs to one topic and one difficulty tier.

### Topics Covered

| Category | Example Topics |
|----------|----------------|
| Core Language | Variables, Data Types, Operators, Type Coercion, Strict Mode |
| Functions | Functions, Closures, Arrow Functions, Higher-Order Functions, Pure Functions, `bind()`, `this` keyword |
| Objects & Prototypes | Objects, Prototypes, Classes, `new`, `super`, `delete` |
| Arrays | Arrays, Array Methods (`map`, `filter`, `reduce`, `forEach`, `find`, `splice`, `slice`, `some`, `every`, `includes`, `flat`, `Array.from`) |
| Async | Promises, `async/await`, Event Loop, `setTimeout`, `setInterval` |
| Strings | String Methods (`charAt`, `trim`, `repeat`, `split`, `replace`) |
| Other | Math, Date, JSON, Modules (ES6 import/export), DOM, Node.js, Loops, Conditionals, Error Handling, Regex basics |

---

## 5. ML Model (`machine-learning/`)

### What It Is

A Random Forest classifier originally trained in Python and exported to a pure-JavaScript function via a transpilation/compilation step. No Python runtime is needed at deploy time.

### Input Vector (24 features)

```
[ YearsExperience, SelfRating,
  Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10,      ← difficulty (1/2/3)
  Time1..Time10,                                   ← seconds per question
  AvgTime, WeightedTime ]
```

- `SelfRating` is currently hardcoded to `2` (dataset average) server-side.

### Output

A probability vector (array of floats). The index with the highest probability is mapped to one of five labels:

| Index | Skill Level |
|-------|-------------|
| 0 | Beginner |
| 1 | Basic |
| 2 | Intermediate |
| 3 | Advanced |
| 4 | Expert |

---

## 6. API Route — POST `/api/predict-js-skill`

**File:** `app/api/predict-js-skill/route.ts`

### Request Body

```json
{
  "YearsExperience": 3,
  "topics": [
    { "name": "Closures", "difficulty": "hard", "time": 22 },
    ...
  ]
}
```

- `topics` must contain exactly 10 entries.
- `difficulty` values are mapped: `easy` → 1, `medium` → 2, `hard` → 3.

### Server-Side Feature Engineering

- `avgTime` = arithmetic mean of all 10 per-question durations.
- `weightedTime` = difficulty-weighted average time (harder questions weight more).
- `selfRating` is fixed at 2.
- Features are assembled in the exact order expected by the model.

### Focus Areas Algorithm

For each question the server computes an efficiency score = `difficulty / time`. The 3 questions with the lowest efficiency (slowest relative to difficulty) are returned as `focusAreas`.

### Success Response

```json
{
  "skillLevel": "Intermediate",
  "focusAreas": ["Closures", "Promises", "Prototypes"]
}
```

### Error Response

```json
{ "error": "Must provide 10 topics" }
```

---

## 7. Main UI Component (`components/Landing.tsx`)

`Landing` is the sole client component (`"use client"`). It manages the entire quiz lifecycle with React state.

### State Variables

| State | Type | Purpose |
|-------|------|---------|
| `quizQuestions` | `QuizQuestion[]` | 10 randomly sampled & shuffled questions |
| `mounted` | `boolean` | Prevents SSR hydration flash |
| `yearsExperience` | `number \| ""` | User-provided experience (slider + input) |
| `answers` | `AnswerMap` | `{ [questionId]: selectedOption }` |
| `isSubmitting` | `boolean` | Loading state for API call |
| `showResults` | `boolean` | Controls Results Dialog visibility |
| `skillResult` | `SkillResult \| null` | API response |
| `apiError` | `string \| null` | API error message |
| `suspicionCount` | `number` | Increments on rule violations |
| `sessionInvalidated` | `boolean` | Locks quiz after 3 violations |
| `showIntroDialog` | `boolean` | Shows rules dialog at startup |
| `hasStarted` | `boolean` | True once user clicks "Start assessment" |
| `timeLeft` | `number` | Seconds remaining (starts at 180) |
| `timerExpired` | `boolean` | True when countdown hits 0 |
| `currentQuestionIndex` | `number` | Active question (0-based) |
| `questionEntryTimes` | `Record<id, ms>` | Timestamp when each question was first shown |
| `questionDurations` | `Record<id, s>` | Seconds taken to first-answer each question |
| `autoSubmitted` | `boolean` | Prevents double auto-submit on timer expiry |

### Key Helper Functions

| Function | Description |
|----------|-------------|
| `shuffleArray<T>(arr)` | Fisher-Yates in-place shuffle |
| `sampleQuestions(source, 10)` | Shuffles source, takes first 10, shuffles each question's options |
| `computeScore(questions, answers)` | Returns `{ correct, total, percentage, breakdown[] }` |
| `formatTime(seconds)` | `"M:SS"` format |
| `handleAnswerChange(id, value)` | Records answer + first-completion duration |
| `submitAssessment(answers, durations)` | Sends POST to `/api/predict-js-skill`, updates state |
| `handleSubmit()` | Guards against incomplete/invalid state before calling `submitAssessment` |

---

## 8. Anti-Cheating System

All detection is done via browser event listeners attached in a `useEffect`. The quiz session becomes invalidated after 3 detections.

| Trigger | Detection Method |
|---------|------------------|
| Tab / window switch | `document.visibilitychange` (hidden) |
| Window focus lost | `window.blur` |
| Copy / Cut text | `document.copy`, `document.cut` (prevented + flagged) |
| Right-click | `document.contextmenu` (prevented + flagged) |
| Keyboard shortcuts | `PrintScreen`, `Ctrl+C`, `Ctrl+X`, `Ctrl+Insert` |
| Page close / navigate away | `window.beforeunload` (warns + flags) |

A visible `<Alert>` banner shows "Tab switch detected (N/3)". At 3 strikes the quiz is locked with a destructive banner.

---

## 9. Timer & Auto-Submit

- **Timer:** 3 minutes (180 seconds) — `TOTAL_TIME_SECONDS = 3 * 60`
- Countdown runs in a `setInterval` only while `hasStarted && !sessionInvalidated && !timerExpired && !autoSubmitted`.
- Turns red when ≤ 60 seconds remain.
- On expiry: all unanswered questions are auto-filled with an incorrect option and time = 1s, then `submitAssessment` is called automatically.

---

## 10. User Flow

```
App loads  
   │  
   ▼  
Intro Dialog shown (rules) ──── user clicks "Start assessment"  
   │                                         │  
   │                                         ▼  
   │                             Timer starts · Questions enabled  
   │  
   ▼  
Step 1: Set Years of Experience (Slider + number input, 0–50)  
   │  
   ▼  
Step 2: Answer 10 Questions (one at a time, prev/next navigation)  
   │      └─ Cannot advance without answering  
   │      └─ Can go back and change previous answers  
   │  
   ▼  
All 10 answered + years set → "Submit Assessment" button enabled  
   │  
   ▼  
POST /api/predict-js-skill  
   │  
   ▼  
Results Dialog:  
   ├─ Quiz Score (correct/10, percentage, progress bar)  
   ├─ AI Prediction (skill level label)  
   ├─ Focus Areas (top 3 weakest topics)  
   └─ Full Question Breakdown (each question: correct ✓ / wrong ✗, correct answer shown)
```

---

## 11. Page Layout

The single route `/` renders two columns on large screens:

| Column | Contents |
|--------|----------|
| Left (`flex-1`) | Experience Card (Step 1) + Questions Card (Step 2) |
| Right (380 px sticky) | Progress Tracker (questions answered bar, timer bar, Submit button, privacy note) |

Animated background blobs (primary/secondary/accent) are rendered as fixed, `pointer-events-none` divs with Tailwind blur utilities.

---

## 12. SEO & Metadata

| Feature | Implementation |
|---------|----------------|
| Title template | `"Js SkillGauge \| JavaScript Skill Assessment"` with `%s \| Js SkillGauge` template |
| OpenGraph | Title, description, website type, en_US locale, logo image |
| Twitter Card | `summary_large_image`, `@ByteCrister` creator |
| Canonical | `alternates.canonical: "/"` |
| Sitemap | `app/sitemap.ts` → `/sitemap.xml` (monthly, priority 1.0) |
| Robots | `app/robots.ts` → allow all, points to sitemap |
| Fonts | Geist Sans + Geist Mono via `next/font/google` |
| Icons | `/favicon.ico` + `/apple-touch-icon.png` (180×180) + `/site.webmanifest` |

---

## 13. Running Locally

```bash
# Install dependencies
npm install

# Development server
npm run dev
# → http://localhost:3000

# Production build
npm run build
npm run start

# Lint
npm run lint
```

---

## 14. Deployment

Designed for Vercel (zero-config). Set the optional environment variable:

```
NEXT_PUBLIC_DOMAIN=https://your-domain.com
```

If not set, `sitemap.ts` and `robots.ts` fall back to `https://js-skill-gauge.vercel.app`.

---

## 15. Privacy

> "Your responses are processed locally and never stored. This is a privacy-first, one-time assessment."

All inference runs inside the Next.js API route on the server — no third-party ML API is called, and no answers or results are persisted.

---

## Citations

The information in this document is sourced directly from the following files:

- **Project identity, author, SEO metadata:** [1](#1-0) [2](#1-1)  
- **Dependencies and scripts:** [3](#1-2)  
- **Question bank types and sample questions:** [4](#1-3)  
- **ML model input vector type definition:** [5](#1-4)  
- **ML model implementation (Random Forest JS export):** [6](#1-5)  
- **API route — request handling, feature engineering, focus areas, label map:** [7](#1-6)  
- **Main UI component — all state, helpers, anti-cheat, timer, layout:** [8](#1-7)  
- **Sitemap generation:** [9](#1-8)  
- **Robots.txt generation:** [10](#1-9)  
- **cn() utility:** [11](#1-10)  
- **Timer constant (3 minutes):** [12](#1-11)  
- **Privacy note in UI:** [13](#1-12)  

---

## Notes

- The **`SelfRating` feature is hardcoded to `2`** server-side in `route.ts` (line 52) — it is not collected from the user. This is a deliberate simplification noted in a code comment as "average from dataset."  
- The ML model currently outputs a **binary probability vector** `[p0, p1]` (only 2 classes detected from the compiled tree structure in `js-skill-rf-model.js`), while the label map defines 5 classes. The `predictedIndex` is clamped with `Math.max(0, Math.min(4, index))`, so in practice the model may only return "Beginner" or "Basic" until the model is retrained with more balanced class data.  
- The `shadcn/ui` components under `components/ui/` are standard generated primitives and are not custom-built — they serve as the design system foundation.  
- The question bank has **120+ entries** but the file was truncated in tooling at line 1000; the actual question count exceeds what is shown in the citations above.