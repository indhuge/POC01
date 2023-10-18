import {
  addAnswer,
  getAllAnswers,
} from "@/DataBase/Controller/surveyController";

export default async function handler(req, res) {
  if (req.method == "GET") {
    res.status(200).json(getAllAnswers());
  } else if (req.method == "POST") {
    const { name, email, _birth, _answer } = JSON.parse(req.body);
    const birth = _birth ? new Date(_birth) : null;
    let answer = 0;
    const ok = Object.keys(_answer);
    for (var x in ok) {
      answer = answer + _answer[x] * 10 ** (ok.length - 1 - x);
    }
    const result = addAnswer(name, email, birth, answer);
    res.status(201);
  }
}
