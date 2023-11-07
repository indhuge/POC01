import Calendar_ from "@/components/Calendar";
import Styles from "./appointment.module.scss";
import Page from "@/components/page";
import { createClient } from "@/prismicio";
import { getStaticContent } from "@/utils/StaticContent";
import { host } from "@/utils/SiteProps";
import { conforms } from "lodash";
import axios from "axios";

export async function getServerSideProps() {
  const client = createClient();
  const staticContent = getStaticContent(client);

  var date = new Date();
  var dateMax = new Date();
  dateMax.setFullYear(date.getFullYear() + 1);
  axios.defaults.baseURL = host;
  var busy = await axios.get(
    `/api/appointment/busy?dateMin=${date.toISOString()}&dateMax=${dateMax.toISOString()}`,
    {
      dateMin: date.toISOString(),
      dateMax: dateMax.toISOString(),
    }
  );

  // var request = await fetch(`${host}/api/appointment/busy`, {
  //   method: "POST",
  //   body: JSON.stringify({
  //     dateMin: date.toISOString(),
  //     dateMax: dateMax.toISOString(),
  //   }),
  // });
  // var busy = await request.json();
  return {
    props: { busy: busy.data, staticContent: await staticContent },
  };
}

export default function Appointment({ staticContent, busy }) {
  return (
    <Page StaticContent={staticContent}>
      <div className={Styles.wrapper}>
        <div className={Styles.content}>
          <h1>Agende uma demosntração</h1>
          <h2>Escolha uma data: </h2>
          <Calendar_ busy={busy} />
        </div>
      </div>
    </Page>
  );
}
