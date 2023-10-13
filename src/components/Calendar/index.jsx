import { useEffect, useState } from "react";
import Style from "./Calendar.module.scss";
import { host } from "@/utils/SiteProps";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import DateCard from "../DateCard";
import { useRouter } from "next/router";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const times = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

function subCompoent(date, busy, router) {
  return (
    <div className={Style.column}>
      <h3 className={Style.date}>{`${date.getDate()}/${
        date.getMonth() + 1
      }`}</h3>
      {times.map((e, i) => {
        return (
          <DateCard
            key={i}
            day={date.getDate()}
            month={date.getMonth() + 1}
            hour={e}
            year={date.getFullYear()}
            isAvailable={!busy?.hours.includes(e)}
            onClick={(day, month, hour, year) => {
              router.push(
                `/appointment/subscribe/?day=${day}&month=${month}&hour=${hour}&year=${year}`
              );
            }}
          />
        );
      })}
    </div>
  );
}
export default function Calendar_() {
  const [date, setDate] = useState(new Date());
  const [array, setArray] = useState([]);
  const today = new Date();

  const [dPicker, setdPicker] = useState(new Date());

  const router = useRouter();

  const loop30 = async (date) => {
    const local_array = [];
    var dateMax = new Date();
    dateMax.setDate(date.getDate() + 4);

    var request = await fetch(`${host}/api/appointment/busy`, {
      method: "POST",
      body: JSON.stringify({
        dateMin: date.toISOString(),
        dateMax: dateMax.toISOString(),
      }),
    });
    var resp = await request.json();

    console.log(resp);

    for (let x = 0; x < 5; x++) {
      local_array.push(
        subCompoent(
          date,
          resp.filter(
            (v) => v.day == `${date.getDate()}/${date.getMonth() + 1}`
          )[0],
          router
        )
      );
      date.setDate(date.getDate() + 1);
    }
    setArray(local_array);
  };

  useEffect(() => {
    loop30(date);
  }, [date]);

  const changeDate = (offset) => {
    if (offset < 0 && today.getDate() >= date.getDate() - 5) return;
    let _date = new Date();
    _date.setDate(date.getDate() + offset);
    setDate(_date);
  };

  return (
    <div className={Style.container}>
      <div className={Style.main}>
        <Calendar
          onChange={setdPicker}
          value={dPicker}
          locale="pt-BR"
          className={Style.react_calendar}
        />
        <div className={Style.wrapper}>{array.map((e) => e)}</div>
      </div>
    </div>
  );
}
