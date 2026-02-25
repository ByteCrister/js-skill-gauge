# Js SkillGauge — Complete Project Overview

---

## 📌 Project Purpose

**Js SkillGauge** is an AI-powered, privacy-first JavaScript skill assessment web application. Its mission is to measure a developer's JavaScript proficiency through a focused, timed 10-question quiz and return an **ML-predicted skill level** along with personalized learning recommendations — all without storing any user data.

> *"Js SkillGauge is an AI-powered JavaScript skill assessment built by Sadiqul Islam Shakib. Measure your JS level with curated questions and ML-based insights."* [1](#0-0)

The application is built with **Next.js 16**, **React 19**, and **TypeScript**, deployed on **Vercel** at `https://js-skill-gauge.vercel.app`. [2](#0-1)

---

## 👤 Author

| Field | Detail |
|---|---|
| **Name** | Sadiqul Islam Shakib |
| **Handle** | ByteCrister |
| **LinkedIn** | https://www.linkedin.com/in/sadiqul-islam-shakib/ |
| **GitHub** | https://github.com/ByteCrister | [3](#0-2)

---

## 🛠️ Technology Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16.1.6 (App Router) |
| UI Library | React 19 |
| Language | TypeScript 5 |
| Styling | TailwindCSS v4 + tw-animate-css |
| Component Library | shadcn/ui + Radix UI |
| Animation | Framer Motion 12 |
| Icons | Lucide React + React Icons |
| Utility | clsx + tailwind-merge |
| ML Runtime | Pure JavaScript (exported Random Forest) | [4](#0-3)

---

## 📁 Project Structure

```
js-skill-gauge/
├── app/
│   ├── api/
│   │   └── predict-js-skill/
│   │       └── route.ts        ← ML API endpoint
│   ├── globals.css
│   ├── layout.tsx              ← Root layout + SEO metadata
│   ├── page.tsx                ← Entry page
│   ├── robots.ts               ← SEO robots config
│   └── sitemap.ts              ← SEO sitemap
├── components/
│   ├── ui/                     ← shadcn/ui components
│   └── Landing.tsx             ← Main quiz UI component
├── data/
│   └── question.ts             ← 150+ question bank
├── lib/
│   └── utils.ts                ← cn() utility
└── machine-learning/
    ├── js-skill-rf-model.js    ← Compiled RF model (from Python)
    └── js-skill-rf-model.d.ts  ← TypeScript type declarations
```

---

## 🎯 Core Features

### 1. 🎲 Randomized Question Sampling
Each quiz session randomly picks **10 questions** from a pool of **150+ JavaScript questions** and also randomizes the order of answer options, ensuring no two sessions are identical. [5](#0-4)

---

### 2. 📚 Question Bank — Topics & Difficulty Levels

The question bank (`data/question.ts`) contains over **150 questions** tagged with:
- **Difficulty**: `easy`, `medium`, or `hard`
- **Topic**: covering the full JavaScript curriculum [6](#0-5)

**Topics covered include:**

| Category | Topics |
|---|---|
| **Fundamentals** | Variables, Data Types, Operators, Conditionals, Loops, Basics |
| **Functions** | Functions, Closures, Higher-Order Functions, Callbacks, Arrow Functions |
| **Objects & Prototypes** | Objects, Prototypes, Classes |
| **Async Programming** | Promises, Asynchronous, Event Loop |
| **Arrays** | Arrays, Array Methods |
| **Type System** | Type Coercion, Strict Mode |
| **Modern JS (ES6+)** | ES6 Features, Modules, Spread/Rest |
| **Browser & DOM** | DOM, Error Handling |
| **Runtime** | Node.js, Date, JSON, Math, Strings, String Methods, Number Methods | [7](#0-6)

---

### 3. ⏱️ 3-Minute Countdown Timer
The quiz is time-boxed to **3 minutes (180 seconds)**. A progress bar turns red when under 60 seconds. If time runs out, the system **auto-submits** — filling all unanswered questions with a wrong answer and a 1-second duration. [8](#0-7) [9](#0-8)

---

### 4. 🛡️ Anti-Cheat / Integrity System
The application monitors user behavior to maintain assessment integrity. After **3 violations**, the session is **invalidated**.

Monitored behaviors:
- Tab switching / window blur (`visibilitychange`, `blur`)
- Copy / Cut operations (`copy`, `cut`)
- Right-click / Context menu (`contextmenu`)
- Keyboard shortcuts (`Ctrl+C`, `Ctrl+X`, `PrintScreen`)
- Attempting to close or navigate away (`beforeunload`) [10](#0-9)

---

### 5. 📐 Per-Question Time Tracking
For each of the 10 questions, the system records the **exact time (in seconds)** the user spends before selecting an answer. These per-question durations (`Time1`–`Time10`) are fed directly into the ML model as features. [11](#0-10) [12](#0-11)

---

### 6. 📊 Experience Input
Before submitting, users must declare their **years of professional JavaScript experience** (0–50) via a combined slider + number input. This becomes a key feature in the ML prediction. [13](#0-12) [14](#0-13)

---

### 7. 🤖 ML-Based Skill Level Prediction (API Route)
On submission, the frontend calls the internal API endpoint `POST /api/predict-js-skill`. The server builds a **24-element feature vector** and runs it through the Random Forest model. [15](#0-14)

**Predicted Skill Levels:**

| Label Index | Skill Level |
|---|---|
| 0 | Beginner |
| 1 | Basic |
| 2 | Intermediate |
| 3 | Advanced |
| 4 | Expert | [16](#0-15)

---

### 8. 📍 Focus Area Recommendations
After prediction, the API also computes **topic efficiency** (difficulty ÷ time spent) for each question and surfaces the **3 weakest topic areas** as personalized learning recommendations. [17](#0-16)

---

### 9. 📋 Detailed Results Breakdown
A results dialog shows:
- **Score** (correct / total) with percentage and progress bar
- **AI Skill Level prediction**
- **Recommended focus areas** as badges
- **Per-question breakdown** — your answer vs. correct answer for each question [18](#0-17)

---

### 10. 🔒 Privacy-First Design
All processing happens server-side (within the same Next.js edge function). No data is persisted to any database. [19](#0-18)

---

### 11. 🎨 Animated UI with Framer Motion
Smooth page load animations, question slide transitions (left-to-right enter/exit), and warning banners use `framer-motion`'s `motion`, `AnimatePresence`, and `initial/animate/exit` patterns. [20](#0-19)

---

### 12. 🔍 SEO & Discoverability
Full SEO metadata including Open Graph, Twitter Cards, sitemap, and robots.txt are configured. [21](#0-20) [22](#0-21)

---

## 🧠 Machine Learning — The Random Forest Model

### Overview
The ML model is a **Random Forest Classifier** originally trained in **Python** (scikit-learn) and **exported to JavaScript** for in-process, serverless execution inside the Next.js API route. There is no external ML service or Python runtime required at runtime. [23](#0-22)

---

### Input Feature Vector (24 Features)

The model accepts a **24-dimensional input vector** with the following exact feature order:

| Index | Feature | Description |
|---|---|---|
| 0 | `YearsExperience` | User-declared JS experience in years |
| 1 | `SelfRating` | Fixed at 2 (dataset average) |
| 2–11 | `Q1`–`Q10` | Difficulty of each question (easy=1, medium=2, hard=3) |
| 12–21 | `Time1`–`Time10` | Seconds taken to answer each question |
| 22 | `AvgTime` | Average of all 10 question times |
| 23 | `WeightedTime` | Difficulty-weighted average time | [24](#0-23)

**Difficulty Mapping (Python LabelEncoder equivalent):** [25](#0-24)

**Feature Construction in the API Route:** [26](#0-25)

---

### How the Model Was Exported (Python → JavaScript)

The Random Forest was trained in Python (scikit-learn), then compiled to a **pure JavaScript file** (`js-skill-rf-model.js`) containing 68 decision tree stubs (`var0`–`var67`), each making a single threshold split on one feature index. The final prediction is the ensemble vote: all tree outputs are summed using `addVectors()` and averaged with `mulVectorNumber()`. [27](#0-26) [28](#0-27)

**Example tree node:**
- `input[21] <= 29.5` → checks if `AvgTime ≤ 29.5 seconds`
- `input[10] <= 2.5` → checks if `Q9 difficulty ≤ 2.5` (i.e., easy or medium)
- `input[0] <= 1.5` → checks if `YearsExperience ≤ 1.5 years` [29](#0-28)

---

### Prediction Pipeline (End to End)

```mermaid
graph TD
    "User fills experience (0-50 yrs)" --> "Answers 10 questions (one at a time)"
    "Answers 10 questions (one at a time)" --> "Per-question time recorded automatically"
    "Per-question time recorded automatically" --> "POST /api/predict-js-skill"
    "POST /api/predict-js-skill" --> "Build 24-feature vector"
    "Build 24-feature vector" --> "Run Random Forest (68 trees in JS)"
    "Run Random Forest (68 trees in JS)" --> "argmax of probability vector"
    "argmax of probability vector" --> "Map to Skill Label"
    "Map to Skill Label" --> "Compute 3 Weakest Topic Efficiency Scores"
    "Compute 3 Weakest Topic Efficiency Scores" --> "Return skillLevel + focusAreas"
    "Return skillLevel + focusAreas" --> "Show Results Dialog"
``` [30](#0-29)

---

### Skill Level Output Labels

The `labelMap` corresponds to the Python `LabelEncoder` class labels used during training: [16](#0-15)

| Predicted Index | Skill Level | Meaning |
|---|---|---|
| 0 | **Beginner** | Very new to JavaScript |
| 1 | **Basic** | Knows fundamentals, limited depth |
| 2 | **Intermediate** | Solid understanding of core JS |
| 3 | **Advanced** | Deep knowledge of async, prototypes, patterns |
| 4 | **Expert** | Mastery of all JS concepts and edge cases |

---

## 🔄 How Everything Works — Step by Step

```mermaid
sequenceDiagram
    participant "Browser" as Browser
    participant "Landing.tsx" as Landing
    participant "API Route" as API
    participant "RF Model" as RF

    "Browser" ->> "Landing.tsx": Page loads → sampleQuestions(150+, 10)
    "Landing.tsx" ->> "Browser": Show Intro Dialog (rules)
    "Browser" ->> "Landing.tsx": Click "Start Assessment" → timer begins
    loop "10 Questions (one at a time)"
        "Landing.tsx" ->> "Browser": Render current question + options
        "Browser" ->> "Landing.tsx": Select answer → record answer + duration
        "Landing.tsx" ->> "Browser": Enable Next button
    end
    "Browser" ->> "Landing.tsx": Click "Submit Assessment"
    "Landing.tsx" ->> "API Route": POST /api/predict-js-skill with YearsExperience + topics[10]
    "API Route" ->> "RF Model": score(24-feature vector)
    "RF Model" ->> "API Route": probability vector [p0, p1, ...]
    "API Route" ->> "API Route": argmax → skillLevel label
    "API Route" ->> "API Route": efficiency sort → top 3 focusAreas
    "API Route" ->> "Landing.tsx": { skillLevel, focusAreas }
    "Landing.tsx" ->> "Browser": Show Results Dialog
``` [31](#0-30) [32](#0-31)

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm / yarn / pnpm / bun

### Installation & Running

```bash
# 1. Clone the repo
git clone https://github.com/ByteCrister/js-skill-gauge.git
cd js-skill-gauge

# 2. Install dependencies
npm install

# 3. Run in development mode
npm run dev

# 4. Open in browser
# http://localhost:3000
```

### Available Scripts

| Script | Command | Description |
|---|---|---|
| Development | `npm run dev` | Start Next.js dev server |
| Production Build | `npm run build` | Compile for production |
| Start Production | `npm run start` | Start the production server |
| Lint | `npm run lint` | Run ESLint | [33](#0-32)

---

## ⚙️ UI Components Used (shadcn/ui)

All UI components are sourced from **shadcn/ui** and live in `components/ui/`:

| Component | Usage |
|---|---|
| `Card` | Question cards, result panels, experience input |
| `Button` | Answer options, navigation (Prev/Next), Submit |
| `Badge` | Topic label, difficulty label, focus areas |
| `Progress` | Answer progress bar + timer bar |
| `Dialog` | Intro modal + Results modal |
| `Slider` | Years-of-experience input |
| `Input` | Manual year entry (number input) |
| `Label` | Form labels |
| `ScrollArea` | Scrollable results breakdown |
| `Separator` | Visual divider in results |
| `Alert` | Anti-cheat violation warning | [34](#0-33)

---

## 🌐 SEO & Deployment

- **Canonical URL**: `/`
- **Sitemap**: `/sitemap.xml` (auto-generated, monthly change frequency)
- **Robots**: All bots allowed on `/`
- **Fonts**: Geist Sans + Geist Mono (via `next/font/google`)
- **Open Graph**: Full og:title, og:description, og:image configured
- **Twitter Cards**: `summary_large_image` card type [35](#0-34) [22](#0-21)

---

## ⚠️ Disclaimer

> *"This assessment provides a skill estimate for self-evaluation purposes. It's not a formal certification but a helpful guide for your learning journey."* [36](#0-35)

---

## Notes

- The Random Forest model was **trained externally in Python** (scikit-learn) and compiled to JavaScript. The training data, training notebook, and feature engineering pipeline are **not included** in this repository. Only the compiled model file `machine-learning/js-skill-rf-model.js` is present.
- The `SelfRating` feature (index 1 in the feature vector) is currently **hardcoded to `2`** in the API route (the dataset average), meaning it does not vary per user.
- The `labelMap` has 5 classes (Beginner → Expert), but the RF model's probability vector may return only 2 probabilities `[p0, p1]` depending on how many classes were present in training — the API handles both cases gracefully via `argmax`.
- The anti-cheat system is **client-side only** and is meant as a deterrent for honest self-assessment, not a cryptographically secure proctoring system. [37](#0-36) [38](#0-37)

---

### Citations

**File:** app/layout.tsx (L16-72)
```typescript
export const metadata: Metadata = {
  title: {
    default: "Js SkillGauge | JavaScript Skill Assessment",
    template: "%s | Js SkillGauge",
  },
  description:
    "Js SkillGauge is an AI-powered JavaScript skill assessment built by Sadiqul Islam Shakib. Measure your JS level with curated questions and ML-based insights.",
  keywords: [
    "JavaScript quiz",
    "JavaScript assessment",
    "JS skill test",
    "frontend interview prep",
    "coding quiz",
    "Next.js project",
    "Sadiqul Islam Shakib",
    "ByteCrister",
  ],
  authors: [
    {
      name: "Sadiqul Islam Shakib",
      url: "https://github.com/ByteCrister",
    },
  ],
  creator: "Sadiqul Islam Shakib",
  publisher: "Sadiqul Islam Shakib",
  openGraph: {
    title: "Js SkillGauge | JavaScript Skill Assessment",
    description:
      "Test your JavaScript skills with 10 curated questions and get an ML-powered skill level prediction, created by Sadiqul Islam Shakib (ByteCrister).",
    type: "website",
    locale: "en_US",
    siteName: "Js SkillGauge",
    images: [
      {
        url: "/apple-touch-icon.png",
        width: 180,
        height: 180,
        alt: "Js SkillGauge logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Js SkillGauge | JavaScript Skill Assessment",
    description:
      "AI-powered JavaScript skill assessment by Sadiqul Islam Shakib (ByteCrister). Take the quiz and discover your JS level.",
    creator: "@ByteCrister",
    images: ["/apple-touch-icon.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};
```

**File:** app/robots.ts (L5-5)
```typescript
    const domain = process.env.NEXT_PUBLIC_DOMAIN ?? "https://js-skill-gauge.vercel.app";
```

**File:** app/page.tsx (L17-25)
```typescript
  authors: [
    {
      name: "Sadiqul Islam Shakib",
      url: "https://www.linkedin.com/in/sadiqul-islam-shakib/",
    },
  ],
  alternates: {
    canonical: "/",
  },
```

**File:** package.json (L5-10)
```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
```

**File:** package.json (L11-34)
```json
  "dependencies": {
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "framer-motion": "^12.34.3",
    "lucide-react": "^0.474.0",
    "next": "16.1.6",
    "radix-ui": "^1.4.3",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "react-icons": "^5.5.0",
    "tailwind-merge": "^3.5.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.6",
    "shadcn": "^3.8.5",
    "tailwindcss": "^4",
    "tw-animate-css": "^1.4.0",
    "typescript": "^5"
  }
```