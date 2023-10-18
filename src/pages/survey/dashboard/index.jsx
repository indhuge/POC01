import { host } from "@/utils/SiteProps";
import { Card, Title, BarChart, Subtitle } from "@tremor/react";

export async function getServerSideProps() {
  const req = await fetch(`${host}/api/survey`, { method: "GET" });
  const _data = await req.json();

  const chartdata = [];

  chartdata.push(
    Object.keys(_data).map((p) => {
      return {
        chart_name: p,
        data: Object.keys(_data[p]).map((r) => {
          return { name: r, respostas: _data[p][r] };
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
