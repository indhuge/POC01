import { addAppointment } from "@/DataBase/Controller/appointmentController";

export default async function handle(req, res) {
  if (req.method == "POST") {
    const { name, date, company } = JSON.parse(req.body);
    console.log(name, date, company);
    // var date = new Date();
    // date.setTime(Date.parse(_date));
    var result = await addAppointment(name, date, company);
    if (result.dataValues.id)
      res.status(200).json({ id: result.dataValues.id });
    else res.status(200).json({ error: "Error" });
  }
}
