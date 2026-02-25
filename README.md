# Machine Learning Model Training Steps

This document explains the end-to-end machine learning pipeline used to build a skill level prediction model. The code files provided include a Python training script (`model-train.py`), a generated JavaScript model (`js_skill_rf_model_*.js`), and a Next.js API route that uses the model for inference.

## 1. Problem Definition

The goal is to predict a user’s **skill level** (Beginner, Basic, Intermediate, Advanced, Expert) based on:

- Years of experience  
- Self‑rating  
- Performance on 10 questions (difficulty and time taken)  
- Total score (legacy feature)

The model is a **Random Forest Classifier** trained on synthetic or real user data. The final model is transpiled to plain JavaScript so it can run in a browser or Node.js environment without external dependencies.

## 2. Data Loading and Validation

- The CSV file `skills_data.csv` is loaded using `pandas`.  
- Emails are validated with a regex pattern; invalid rows are dropped.  
- The `Email` column is removed before training (only used for reference).  

## 3. Data Preprocessing

### 3.1 Numeric Conversion
- Columns like `YearsExperience`, `SelfRating`, `TotalScore`, and `Time1`…`Time10` are converted to numeric, coercing errors to `NaN`.  
- Missing times are filled with `1` (minimum plausible time).  

### 3.2 Difficulty Encoding
- Question difficulty strings (`easy`, `medium`, `hard`) are mapped to numeric values:  
  `easy → 1`, `medium → 2`, `hard → 3`.  
- Unknown difficulties default to `1`.  

### 3.3 Missing Value Imputation
- All remaining numeric missing values are filled with the **median** of their respective columns.  
- Topic columns (if present) are filled with `"Unknown"`.  

## 4. Feature Engineering

Two new features are created from the raw data:

- **`AvgTime`** – average time across the 10 questions:  
  `AvgTime = mean(Time1, …, Time10)`

- **`WeightedTime`** – time weighted by question difficulty, to reflect that harder questions might legitimately take longer:  
  `WeightedTime = sum(Time_i * Q_i) / sum(Q_i)`  
  (a small epsilon avoids division by zero)

These features capture overall speed and difficulty‑adjusted speed.

## 5. Target Label Creation

The target variable `ActualSkillLevel` is derived from a custom performance formula:

```python
perf = sum(Q_i / max(Time_i, 1) for i in 1..10) + TotalScore/100
```

Based on the value of `perf`, the skill level is assigned:

| perf range     | Skill Level   |
|----------------|---------------|
| < 0.15         | Beginner      |
| 0.15 – 0.25    | Basic         |
| 0.25 – 0.35    | Intermediate  |
| 0.35 – 0.50    | Advanced      |
| ≥ 0.50         | Expert        |

This heuristic creates a synthetic ground truth from the available features.

## 6. Feature Set and Label Encoding

The final feature matrix `X` consists of:

- `YearsExperience`
- `SelfRating`
- `Q1` … `Q10` (encoded difficulties)
- `Time1` … `Time10`
- `AvgTime`
- `WeightedTime`

The target `y` is the skill level string. A `LabelEncoder` converts these strings to integers (0 … 4) for training.

## 7. Train/Test Split

The data is split into training (80%) and testing (20%) sets using `train_test_split` with a fixed random seed for reproducibility.

## 8. Model Training

A **Random Forest Classifier** is used with:

- `n_estimators = 100` (100 decision trees)
- `random_state = 42` (for reproducibility)

Random Forest is chosen because it:

- Handles mixed feature types well
- Provides feature importance insights
- Is robust to overfitting (when using enough trees)
- Can be exported to plain code via `m2cgen`

## 9. Model Evaluation

- **Cross‑validation**: 5‑fold cross‑validation is performed on the entire dataset to estimate generalisation performance.  
- **Test set accuracy**: The model is evaluated on the held‑out test set.

Both metrics are printed to the console.

## 10. Model Export

### 10.1 Saving the Scikit‑learn Model
The trained Random Forest and the label encoder are saved as `.pkl` files using `joblib` for later reuse or retraining.

### 10.2 JavaScript Conversion
The Python library `m2cgen` (Model to Code Generator) transpiles the Random Forest into **standalone JavaScript** code. The generated file (`js_skill_rf_model_*.js`) contains:

- A list of feature names (as a comment)
- A `score(input)` function that returns a probability vector (length = number of classes)
- Helper functions `addVectors` and `mulVectorNumber`

This allows the model to be used in any JavaScript environment without Python dependencies.

## 11. Integration with Next.js

The API route (`next-js-api.ts`) demonstrates how to use the exported model:

1. Parse the incoming JSON request containing `YearsExperience` and an array of 10 topics (each with difficulty and time).  
2. Compute the same features used during training: difficulties, times, `AvgTime`, `WeightedTime`.  
3. Call `rfScore(features)` which returns a probability vector.  
4. Determine the class with the highest probability and map it back to a skill level using the saved label order.  
5. Additionally, identify the three topics with the lowest efficiency (`difficulty / time`) as **focus areas**.  
6. Return the prediction and focus areas as JSON.

## 12. Key Machine Learning Concepts Applied

- **Supervised classification** – predicting a categorical target.
- **Feature engineering** – creating `AvgTime` and `WeightedTime` to capture speed and difficulty‑adjusted speed.
- **Label encoding** – converting string labels to integers.
- **Train/test split** – to evaluate model on unseen data.
- **Cross‑validation** – more robust performance estimate.
- **Random Forest** – ensemble of decision trees.
- **Model serialisation** – saving trained model (`.pkl`) and transpiling to JavaScript for deployment.
- **Inference pipeline** – reproducing the same feature transformations in the API.

## 13. Potential Improvements

- Collect more real‑world data to replace the heuristic target labels.
- Tune hyperparameters (e.g., `max_depth`, `min_samples_split`) using grid search.
- Add more sophisticated features (e.g., variance of times, topic mastery).
- Use a different model if interpretability or latency requirements change.

---