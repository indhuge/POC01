export async function addAnswer(
  name: string,
  email: string,
  birth: Date,
  answer: number
): Promise<any> {
  const model = require("../model/survey_answer");
  const result = await model.create({
    name: name,
    email: email,
    birth: birth?.toISOString(),
    answer: answer,
  });
  return result;
}

export async function getAllAnswers(): Promise<any> {
  const model = require("../model/survey_answer");
  return await model.findAll();
}
