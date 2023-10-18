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

  chartdata.push(
    Object.keys(_data).map((p) => {
      return {
        chart_name: qC.getQuestionByIndex(p),
        data: Object.keys(_data[p]).map((r) => {
          return { name: qC.getAnswerById(p, r), respostas: _data[p][r] };
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
  console.log(chartdata);
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
