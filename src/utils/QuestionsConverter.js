const indexToOption = {
  1: "option_a",
  2: "option_b",
  3: "option_c",
  4: "option_d",
};

class QuestionConverter {
  constructor(surveyData) {
    this._surveyData = surveyData;
  }

  getQuestionByIndex(index) {
    return this._surveyData.data.questions[index].question;
  }

  getAnswerById(question_index, anwser_id) {
    return this._surveyData.data.questions[question_index][
      indexToOption[anwser_id]
    ];
  }
}

export default QuestionConverter;
