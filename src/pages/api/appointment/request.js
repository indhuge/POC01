import { addAppointment } from "@/DataBase/Controller/appointmentController";
import { sendAppointmentConfirmationEmail } from "@/utils/emailHandler";
import { host } from "@/utils/SiteProps";
export default async function handle(req, res) {
  if (req.method == "POST") {
    const { name, date: _date, company, email } = JSON.parse(req.body);
    console.log(name, date, company);
    var date = new Date();
    date.setTime(Date.parse(_date));
    var result = await addAppointment(name, _date, email, company);
    sendAppointmentConfirmationEmail({
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
      hour: date.getHours(),
      name: name,
      company: company,
      email: email,
      link: `${host}/api/appointment/${result.dataValues.id}`,
    }).then((e) => console.log(e));
    if (result.dataValues.id)
      res.status(200).json({ id: result.dataValues.id });
    else res.status(200).json({ error: "Error" });
  }
}
