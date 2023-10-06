import createEvent from "@/utils/calendar";
import { date } from "yup";

export default async function handle(req, res) {
  if (req.method == "POST") {
    const { eventName, eventDate } = req.body;
    var date = new Date();
    date.setTime(Date.parse(eventDate));
    createEvent(eventName, date);
    res.status(200).json({ ok: date.toString() });
  }
}
