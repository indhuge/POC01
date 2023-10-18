import {
  addAnswer,
  getAllAnswers,
} from "@/DataBase/Controller/surveyController";

export default async function handler(req, res) {
  if (req.method == "GET") {
    const response = await getAllAnswers();
    const length = response[0].answer.toString().length;
    const wrapper = {};
    for (var x = 0; x < length; x++) wrapper[x] = [];
    response.forEach((element) => {
      const value = element.answer.toString();
      for (var x = 0; x < value.length; x++) {
        wrapper[x]?.push(value[x]);
      }
    });
    const finalObj = {};
    for (var x in Object.keys(wrapper)) {
      finalObj[x] = wrapper[x].reduce((acc, value) => {
        return {
          ...acc,
          [value]: (acc[value] || 0) + 1,
        };
      }, {});
    }

    res.status(200).json(finalObj);
  } else if (req.method == "POST") {
    const { name, email, _birth, _answer } = JSON.parse(req.body);
    const birth = _birth ? new Date(_birth) : null;
    let answer = 0;
    const ok = Object.keys(_answer);
    for (var x in ok) {
      answer = answer + _answer[x] * 10 ** (ok.length - 1 - x);
    }
    const result = await addAnswer(name, email, birth, answer);
    res.status(201);
  }
}
