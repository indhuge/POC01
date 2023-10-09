import { addAppointment } from "@/DataBase/Controller/appointmentController";
import { getEvents } from "@/utils/calendar";

export default async function handle(req, res) {
  if (req.method == "POST") {
    const { name, date: _date, company } = req.body;
    var date = new Date();
    date.setTime(Date.parse(_date));
    var result = await addAppointment(name, date.toISOString(), company);
    if (result.dataValues.id)
      res.status(200).json({ id: result.dataValues.id });
    else res.status(200).json({ error: "Error" });
  } else {
    var dateMin = new Date();
    var dateMax = new Date();
    dateMax.setDate(dateMin.getDate() + 5);
    getEvents(dateMin, dateMax).then((e) => {
      res.status(200).json(e);
    });
  }
}
