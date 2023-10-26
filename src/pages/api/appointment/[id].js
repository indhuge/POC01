import { createEvent, addMeet } from "@/utils/calendar";
import { sendMeetEmail } from "@/utils/emailHandler";
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
    console.log(ap.Email);
    const r = createEvent(
      {
        id: id,
        eventName: ap.Name,
        eventDate: date,
        email: ap.Email,
      },
      (result) => {
        sendMeetEmail({
          name: ap.name,
          email: ap.Email,
          day: date.getDate(),
          month: date.getMonth() + 1,
          year: date.getFullYear(),
          hour: date.getHours(),
          company: ap.Company,
          link: result.data.hangoutLink,
        });
      }
    );
    res.status(200).json({ r });
  }
}
