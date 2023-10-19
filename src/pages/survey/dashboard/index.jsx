import { createClient } from "@/prismicio";
import { host } from "@/utils/SiteProps";
import { Card, Title, BarChart, Subtitle } from "@tremor/react";
import QuestionConverter from "@/utils/QuestionsConverter";
import Page from "@/components/page";
import { getStaticContent } from "@/utils/StaticContent";

export async function getServerSideProps() {
  const client = createClient();
  const staticContent = getStaticContent(client);
  const survey_data = await client.getSingle("survey");

  const req = await fetch(`${host}/api/survey`, { method: "GET" });
  const _data = await req.json();
  const count = _data.count;
  delete _data.count;

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
      staticContent: await staticContent,
      count: count,
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

export default function DashboardPage({ chartdata, staticContent, count }) {
  return (
    <Page StaticContent={staticContent}>
      <div className="container mx-auto px-4 py-5">
        <h1 className="text-xl text-blue font-bold">Resultados da pesquisa</h1>
        <p className="text-base">{`Total de respostas registradas: ${count}`}</p>
      </div>
      <div className="container mx-auto px-4 grid gap-4 grid-cols-2">
        {chartdata[0].map((c, i) => {
          return (
            <Card className="" key={i}>
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
    </Page>
  );
}
