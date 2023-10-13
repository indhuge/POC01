import Page from "@/components/page";
import Styles from "./subscribe.module.scss";
import Input from "@/components/input";
import Button from "@/components/button";
import { useSearchParams } from "next/navigation";
import { host } from "@/utils/SiteProps";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { createClient } from "@/prismicio";
import { getStaticContent } from "@/utils/StaticContent";

export async function getStaticProps() {
  const client = createClient();
  const staticContent = await getStaticContent(client);
  return {
    props: { staticContent },
  };
}

export default function Subscribe({ staticContent }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const day = searchParams.get("day");
  const month = searchParams.get("month");
  const hour = searchParams.get("hour");
  const year = searchParams.get("year");

  // useEffect(() => {
  //   if (!day && !month && !hour && !year) {
  //     router.push("/appointment");
  //   }
  // }, []);

  let state = useState({
    name: "",
    company: "",
    email: "",
  });

  const setName = (e) => {
    state.name = e.target.value;
  };

  const setCompany = (e) => {
    state.company = e.target.value;
  };

  const setEmail = (e) => {
    state.email = e.target.value;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const date = new Date(
      parseInt(year),
      parseInt(month - 1),
      parseInt(day),
      parseInt(hour)
    );
    console.log(date.toISOString());
    var req = await fetch("/api/appointment/request", {
      method: "POST",
      body: JSON.stringify({
        name: state.name,
        date: date.toISOString(),
        company: state.company,
        email: state.email,
      }),
    });
    var res = await req.json();

    if (req.status == 200) {
      router.push("/appointment/subscribe/confirm", { shallow: true });
    }
  };

  return (
    <Page StaticContent={staticContent}>
      <div className={Styles.wrapper}>
        <div className={Styles.content}>
          <h1>Preencha seus dados:</h1>
          <h2>{`Data: ${day}/${month}/${year} ${hour}:00`}</h2>
          <form onSubmit={onSubmit}>
            <label>Nome:</label>
            <Input
              type="text"
              name={"name"}
              required={true}
              value={state.name}
              onChange={setName}
            />
            <label>Empresa:</label>
            <Input
              type="text"
              name={"company"}
              required={true}
              value={state.company}
              onChange={setCompany}
            />
            <label>Email:</label>
            <Input
              type="email"
              name={"email"}
              required={true}
              value={state.email}
              onChange={setEmail}
            />
            <input type="submit" value="Agendar" />
          </form>
        </div>
      </div>
    </Page>
  );
}
