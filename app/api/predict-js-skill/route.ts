import { NextRequest, NextResponse } from "next/server";
import type { DifficultyType } from "../../../data/question";

// Import the JS model exported from Python
import { score as rfScore } from "../../../machine-learning/js-skill-rf-model";

// Label map from Python LabelEncoder
export type SkillLevel = "Beginner" | "Basic" | "Intermediate" | "Advanced" | "Expert";
const labelMap: SkillLevel[] = ["Beginner", "Basic", "Intermediate", "Advanced", "Expert"];

// Map difficulty strings to numbers
const difficultyMap: Record<DifficultyType, number> = { easy: 1, medium: 2, hard: 3 };

type TopicInput = {
    name: string;
    difficulty: DifficultyType;
    time: number;
};

type PredictRequest = {
    YearsExperience: number;
    topics: TopicInput[]; // must be length 10
};

type PredictSuccessResponse = {
    skillLevel: SkillLevel;
    focusAreas: string[];
};

type PredictErrorResponse = {
    error: string;
};

type PredictResponse = PredictSuccessResponse | PredictErrorResponse;

export async function POST(req: NextRequest): Promise<NextResponse<PredictResponse>> {
    try {
        const body: PredictRequest = await req.json();
        if (!body.topics || body.topics.length !== 10) {
            return NextResponse.json({ error: "Must provide 10 topics" }, { status: 400 });
        }

        const times = body.topics.map((t) => t.time ?? 1);
        const difficulties = body.topics.map((t) => difficultyMap[t.difficulty] ?? 1);

        const avgTime = times.reduce((a, b) => a + b, 0) / times.length;
        const weightedTime =
            times.reduce((sum, t, i) => sum + t * difficulties[i], 0) /
            (difficulties.reduce((a, b) => a + b, 0) + 1e-6);

        const features: number[] = [
            body.YearsExperience,
            ...difficulties,
            ...times,
            avgTime,
            weightedTime,
        ];

        // rfScore returns a probability vector like [p0, p1].
        // We take the index of the highest probability and map it to a label.
        const rawPrediction = rfScore(features) as unknown;
        let predictedIndex = 0;

        if (Array.isArray(rawPrediction)) {
            const probs = rawPrediction as number[];
            if (probs.length > 0) {
                let bestIdx = 0;
                let bestVal = probs[0];
                for (let i = 1; i < probs.length; i++) {
                    if (probs[i] > bestVal) {
                        bestVal = probs[i];
                        bestIdx = i;
                    }
                }
                predictedIndex = bestIdx;
            }
        } else if (typeof rawPrediction === "number") {
            predictedIndex = rawPrediction;
        }

        // Clamp to available labels
        predictedIndex = Math.max(0, Math.min(labelMap.length - 1, predictedIndex));
        const skillLevel = labelMap[predictedIndex];

        const efficiency = difficulties.map((d, i) => d / Math.max(times[i], 1));
        const weakestIndexes = efficiency
            .map((v, i) => ({ v, i }))
            .sort((a, b) => a.v - b.v)
            .slice(0, 3)
            .map((x) => x.i);
        const focusAreas = weakestIndexes.map((i) => body.topics[i].name);

        return NextResponse.json({ skillLevel, focusAreas });
    } catch (err: unknown) {
        console.error(err);
        return NextResponse.json({ error: "Prediction failed" }, { status: 500 });
    }
}