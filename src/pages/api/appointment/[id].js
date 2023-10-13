import { createEvent, addMeet } from "@/utils/calendar";
import {
  confirmAppointment,
  getAppointment,
} from "@/DataBase/Controller/appointmentController";

export default async function handle(req, res) {
  if (req.method == "POST") {
    const id = parseInt(req.query.id);
    const ap = await getAppointment(id);
    if (ap.Confirmed == true) {
      res.status(500).json({ error: "Appointment already confimed" });
    }
    confirmAppointment(id);

    var date = new Date();
    date.setTime(Date.parse(ap.Date));
    var result = await createEvent(id, ap.Name, date);

    res.status(200).json({ result });
  }
}
