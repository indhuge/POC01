import Style from "./DateCard.module.scss";

export default function DateCard({
  day,
  month,
  hour,
  year,
  isAvailable,
  onClick,
}) {
  return isAvailable == true ? (
    <div
      className={Style.timeCards}
      onClick={() => {
        onClick(day, month, hour, year);
      }}
    >{`${hour}:00`}</div>
  ) : (
    <div className={`${Style.timeCards} ${Style.busy}`}>{`${hour}:00`}</div>
  );
}
