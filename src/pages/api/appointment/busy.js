import { getEvents, unionByDay } from "@/utils/calendar";

export default async function handle(req, res) {
  const { dateMin: _min, dateMax: _max } = JSON.parse(req.body);

  var dateMin = new Date(_min);
  var dateMax = new Date(_max);

  getEvents(dateMin, dateMax).then((e) => {
    var f = unionByDay(e);
    res.status(200).json(f);
  });
}
