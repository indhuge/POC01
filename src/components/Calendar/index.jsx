import { useEffect, useState } from "react";
import Style from "./Calendar.module.scss";

const times = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

function loop30(date) {
  var array = [];
  for (let x = 0; x < 5; x++) {
    array.push(subCompoent(date));
    date.setDate(date.getDate() + 1);
  }
  return array;
}

function subCompoent(date) {
  return (
    <div className={Style.column}>
      <h3 className={Style.date}>{`${date.getDate()}/${
        date.getMonth() + 1
      }`}</h3>
      {times.map((e) => {
        return <div className={Style.timeCards}>{`${e}:00`}</div>;
      })}
    </div>
  );
}
export default function Calendar() {
  const [date, setDate] = useState(new Date());
  const today = new Date();

  const changeDate = (offset) => {
    if (offset < 0 && today.getDate() >= date.getDate() - 5) return;
    let _date = new Date();
    _date.setDate(date.getDate() + offset);
    setDate(_date);
  };

  return (
    <div className={Style.main}>
      <button
        onClick={() => {
          changeDate(0);
        }}
      >
        Click me +
      </button>
      <button
        onClick={() => {
          changeDate(-10);
        }}
        style={{ top: 10 }}
      >
        Click me -
      </button>
      <div className={Style.wrapper}>{loop30(date)}</div>
    </div>
  );
}
