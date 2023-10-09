const { google } = require("googleapis");

function toIsoString(date) {
  var tzo = -date.getTimezoneOffset(),
    dif = tzo >= 0 ? "+" : "-",
    pad = function (num) {
      return (num < 10 ? "0" : "") + num;
    };

  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate()) +
    "T" +
    pad(date.getHours()) +
    ":" +
    pad(date.getMinutes()) +
    ":" +
    pad(date.getSeconds()) +
    dif +
    pad(Math.floor(Math.abs(tzo) / 60)) +
    ":" +
    pad(Math.abs(tzo) % 60)
  );
}

export default async function createEvent(eventName, eventDate) {
  const endDate = new Date();
  endDate.setTime(eventDate.getTime());
  endDate.setHours(eventDate.getHours() + 1);

  const auth = new google.auth.GoogleAuth({
    keyFile: "./gapi_key.json",
    scopes: [
      "https://www.googleapis.com/auth/calendar.events",
      "https://www.googleapis.com/auth/calendar",
    ],
  });
  const calendar = google.calendar({ version: "v3", auth: auth });
  const calendarId =
    "67b3b4f08d6954fdde290336a149e18d7f4e849d047e051bd9a8b563f07a9dbc@group.calendar.google.com";

  var event = {
    summary: eventName,
    // location: "800 Howard St., San Francisco, CA 94103",
    description: "Testando a API do google",
    start: {
      dateTime: toIsoString(eventDate),
      timeZone: "America/Sao_Paulo",
    },
    end: {
      dateTime: toIsoString(endDate),
      timeZone: "America/Sao_Paulo",
    },
    // recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
    reminders: {
      useDefault: false,
      overrides: [
        { method: "email", minutes: 24 * 60 },
        { method: "popup", minutes: 10 },
      ],
    },
    // attendees: [{ email: "luanf2003@gmail.com" }],
  };

  calendar.events.insert(
    { calendarId: calendarId, resource: event },
    (err, res) => {
      console.log(err);
      console.log(res);
      return { err: err, res: res };
    }
  );
}
