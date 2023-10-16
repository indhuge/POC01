const { google } = require("googleapis");
const util = require("util");
const { groupBy } = require("lodash");

export function unionByDay(list) {
  const g = groupBy(list, ({ day, mouth }) => `${day}/${mouth}`);
  return Object.keys(g).map((d) => {
    const hours = [];
    g[d].forEach((o) => {
      hours.push(o.hour);
    });
    return { day: d, hours: hours };
  });
}

export function toIsoString(date) {
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

export async function createEvent(id, eventName, eventDate, company) {
  const endDate = new Date();
  endDate.setTime(eventDate.getTime());
  endDate.setHours(eventDate.getHours() + 1);

  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.gapi_key),
    // keyFile: "./gapi_key.json",
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
    description: `Demonstração para a ${company}`,
    conferenceData: {
      createRequest: { requestId: `HUGEConference-${id}` },
      conferenceSolutionKey: { type: "hangoutsMeet" },
    },
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

export async function getEvents(dateMin, dateMax) {
  const auth = new google.auth.GoogleAuth({
    keyFile: "./gapi_key.json",
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });
  const calendar = google.calendar({ version: "v3", auth: auth });
  const calendarId =
    "67b3b4f08d6954fdde290336a149e18d7f4e849d047e051bd9a8b563f07a9dbc@group.calendar.google.com";

  var result = await calendar.events.list({
    calendarId: calendarId,
    timeMax: toIsoString(dateMax),
    timeMin: toIsoString(dateMin),
  });
  var result_map = result.data.items.map((e) => {
    const s = e.start.dateTime.split("T");
    return {
      mouth: s[0].slice(5, 7),
      day: s[0].slice(8, 10),
      hour: s[1].slice(0, 2),
    };
  });

  return result_map;
}

export async function addMeet() {
  // d0gvs8f2u9mk20v9g44m435kf0

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

  calendar.events.patch(
    {
      calendarId: calendarId,
      eventId: "d0gvs8f2u9mk20v9g44m435kf0",
      resource: {
        conferenceData: {
          createRequest: { requestId: "7qxalsvy0e" },
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
      conferenceDataVersion: 1,
    },
    function (err, res) {
      console.log(res);
      console.log(err);
    }
  );
}
