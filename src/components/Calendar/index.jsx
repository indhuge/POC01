/* eslint-disable */
import { useEffect, useState } from "react";
import Style from "./Calendar.module.scss";
import { host } from "@/utils/SiteProps";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import DateCard from "../DateCard";
import { useRouter } from "next/router";
import Calendar from "react-calendar";

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
export default function Calendar_({ busy }) {
  const [array, setArray] = useState([]);
  const date = new Date();

  do {
    date.setDate(date.getDate() + 1);
  } while (date.getDay() == 0 || date.getDay() == 6);

  const [dPicker, setdPicker] = useState(new Date().setDate(date.getDate()));
  const router = useRouter();

  const generateTimeCards = (value) => {
    let local_array = [];
    let l_date = new Date();
    l_date.setMonth(value.getMonth());
    l_date.setDate(value.getDate() - (value.getDay() - 1));
    // console.log(l_date.getDate());

    for (let i = 0; i < 5; i++) {
      local_array.push(
        subCompoent(
          l_date,
          busy.filter(
            (v) => v.day == `${l_date.getDate()}/${l_date.getMonth() + 1}`
          )[0],
          router
        )
      );
      l_date.setDate(l_date.getDate() + 1);
    }
    setArray(local_array);
  };

  const onDateChanged = (value, event) => {
    setdPicker(value);
    console.log(value);
    generateTimeCards(value);
  };

  useEffect(() => {
    generateTimeCards(date);
  }, []);

  return (
    <div className={Style.container}>
      <div className={Style.main}>
        <Calendar
          onChange={onDateChanged}
          value={dPicker}
          locale="pt-BR"
          tileDisabled={({ activeStartDate, date, view }) =>
            date.getDay() === 0 || date.getDay() === 6
          }
          view="month"
          minDate={date}
        />
        <div className={Style.wrapper}>{array.map((e) => e)}</div>
      </div>
    </div>
  );
}
