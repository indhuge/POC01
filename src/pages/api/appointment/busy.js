import { host } from "@/utils/SiteProps";
import { getEvents, unionByDay } from "@/utils/calendar";
import { useSearchParams } from "next/navigation";

export default async function handle(req, res) {
  // const log = await fetch(`${host}/api/log`, {
  //   method: "POST",
  //   body: req.body,
  // });

  const { dateMin: _min, dateMax: _max } = req.query;

  var dateMin = new Date(_min);
  var dateMax = new Date(_max);

  getEvents(dateMin, dateMax).then((e) => {
    if (e.erro != undefined) {
      console.log(e.erro);
      res.status(500).json(e);
    }
    var f = unionByDay(e);
    res.status(200).json(f);
  });

  // res.status(200).json([
  //   { day: "18/10", hours: ["15", "17"] },
  //   { day: "20/10", hours: ["14"] },
  // ]);
}
