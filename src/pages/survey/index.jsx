import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { createClient } from "@/prismicio";
import { useCallback } from "react";

export async function getStaticProps() {
  const client = createClient();
  const surveypage = await client.getSingle("survey");

  const surveyJson = {
    elements: [
      {
        name: "contact",
        type: "panel",
        state: "collapsed",
        title: "Dados Pessoais (opcional)",
        elements: [
          {
            name: "name",
            title: "Escreva seu nome",
            type: "text",
          },
          {
            name: "birth",
            title: "Data de Nascimento",
            type: "text",
            inputType: "date",
            maxValueExpression: "today()",
          },
        ],
      },
    ],
  };

  const mapped = surveypage.data.questions.map((q, index) => {
    return {
      name: index.toString(),
      type: "checkbox",
      title: q.question,
      isRequired: true,
      maxSelectedChoices: 1,
      showNoneItem: false,
      colCount: 1,
      choices: [
        { text: q.option_a, value: 1 },
        { text: q.option_b, value: 2 },
        { text: q.option_c, value: 3 },
        { text: q.option_d, value: 4 },
      ],
    };
  });
  mapped.forEach((e) => surveyJson.elements.push(e));

  return {
    props: { surveyJson, mapped },
  };
}

export default function SurveyPage({ surveyJson, mapped }) {
  const survey = new Model(surveyJson);
  const getResults = useCallback(async (s) => {
    const data = s.data;
    const name = data.name;
    const _birth = data.birth;
    const email = data.email;
    delete data.name;
    delete data.birth;
    delete data.email;
    const req = await fetch("/api/survey", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        _birth: _birth,
        email: email,
        _answer: data,
      }),
    });
    console.log(await req.json());
  });
  survey.onComplete.add(getResults);

  return <Survey model={survey} />;
}
