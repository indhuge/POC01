import Page from "@/components/page";
import Styles from "./subscribe.module.scss";
import Input from "@/components/input";
import Button from "@/components/button";
import { useSearchParams } from "next/navigation";

export default function Subscribe() {
  const searchParams = useSearchParams();

  const day = searchParams.get("day");
  const month = searchParams.get("month");
  const hour = searchParams.get("hour");
  const year = searchParams.get("year");

  console.log(day, month, hour);

  return (
    <Page>
      <div className={Styles.wrapper}>
        <div className={Styles.content}>
          <h1>Preencha seus dados:</h1>
          <h2>{`Data: ${day}/${month}/${year} ${hour}:00`}</h2>
          <form>
            <label>Nome:</label>
            <Input type="text" name={"name"} required={true} />
            <label>Empresa:</label>
            <Input type="text" name={"company"} required={true} />
            <label>Email:</label>
            <Input type="email" name={"email"} required={true} />
            <input type="submit" value="Agendar" />
          </form>
        </div>
      </div>
    </Page>
  );
}
