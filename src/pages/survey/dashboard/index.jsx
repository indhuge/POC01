import { createClient } from "@/prismicio";
import { host } from "@/utils/SiteProps";
import { Card, Title, BarChart, Subtitle } from "@tremor/react";
import QuestionConverter from "@/utils/QuestionsConverter";

export async function getServerSideProps() {
  const client = createClient();
  const survey_data = await client.getSingle("survey");

  const req = await fetch(`${host}/api/survey`, { method: "GET" });
  const _data = await req.json();

  const chartdata = [];

  const qC = new QuestionConverter(survey_data);

  const resps = [1, 2, 3, 4];

  chartdata.push(
    Object.keys(_data).map((p) => {
      return {
        chart_name: qC.getQuestionByIndex(p),
        data: resps.map((r) => {
          return { name: qC.getAnswerById(p, r), respostas: _data[p][r] ?? 0 };
        }),
      };
    })
  );

  return {
    props: {
      chartdata,
    },
  };
}

// const chartdata = [
//   {
//     name: "Resposta A",
//     respostas: 50,
//   },
//   {
//     name: "Reposta B",
//     respostas: 200,
//   },
// ];

export default function DashboardPage({ chartdata }) {
  return (
    <div>
      {chartdata[0].map((c) => {
        return (
          <Card>
            <Title>{c.chart_name}</Title>
            <BarChart
              data={c.data}
              index="name"
              categories={["respostas"]}
              yAxisWidth={48}
            />
          </Card>
        );
      })}
    </div>
  );
}
