import Calendar_ from "@/components/Calendar";
import Styles from "./appointment.module.scss";
import Page from "@/components/page";
import { createClient } from "@/prismicio";
import { getStaticContent } from "@/utils/StaticContent";

export async function getStaticProps() {
  const client = createClient();
  const staticContent = await getStaticContent(client);
  return {
    props: { staticContent },
  };
}

export default function Appointment({ staticContent }) {
  return (
    <Page StaticContent={staticContent}>
      <div className={Styles.wrapper}>
        <div className={Styles.content}>
          <h1>Agende uma demosntração</h1>
          <h2>Escolha uma data: </h2>
          <Calendar_ />
        </div>
      </div>
    </Page>
  );
}
