import { useEffect, useState } from "react";
import Style from "./Calendar.module.scss";
import { host } from "@/utils/SiteProps";

const times = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

function subCompoent(date, busy) {
  console.log(busy?.hours);

  return (
    <div className={Style.column}>
      <h3 className={Style.date}>{`${date.getDate()}/${
        date.getMonth() + 1
      }`}</h3>
      {times.map((e) => {
        if (!busy?.hours.includes(e))
          return <div className={Style.timeCards}>{`${e}:00`}</div>;
        else
          return (
            <div
              className={Style.timeCards}
              style={{ backgroundColor: "red" }}
            >{`${e}:00`}</div>
          );
      })}
    </div>
  );
}
export default function Calendar() {
  const [date, setDate] = useState(new Date());
  const [array, setArray] = useState([]);
  const today = new Date();

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
          )[0]
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
      <div className={Style.wrapper}>{array.map((e) => e)}</div>
    </div>
  );
}
