export type ModelInputVector = [
  number, // YearsExperience
  number, // SelfRating
  number, // Q1
  number, // Q2
  number, // Q3
  number, // Q4
  number, // Q5
  number, // Q6
  number, // Q7
  number, // Q8
  number, // Q9
  number, // Q10
  number, // Time1
  number, // Time2
  number, // Time3
  number, // Time4
  number, // Time5
  number, // Time6
  number, // Time7
  number, // Time8
  number, // Time9
  number, // Time10
  number, // AvgTime
  number  // WeightedTime
];

export type ModelInputVector = [
  number, number,
  number, number, number, number, number,
  number, number, number, number, number,
  number, number, number, number, number,
  number, number, number, number, number,
  number, number
];

export function score(input: ModelInputVector): ModelScoreOutput;

