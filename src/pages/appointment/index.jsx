import Calendar from "@/components/Calendar";
import Styles from "./appointment.module.scss";
import Page from "@/components/page";

export default function Appointment() {
  return (
    <Page>
      <div className={Styles.wrapper}>
        <div className={Styles.content}>
          <h1>Agende uma demosntração</h1>
          <h2>Escolha uma data: </h2>
          <Calendar />
        </div>
      </div>
    </Page>
  );
}
