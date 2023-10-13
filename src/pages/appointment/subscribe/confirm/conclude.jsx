import { createClient } from "@/prismicio";
import Styles from "./confirm.module.scss";
import { getStaticContent } from "@/utils/StaticContent";
import Page from "@/components/page";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  const client = createClient();
  const staticContent = getStaticContent(client);

  return {
    props: { staticContent: await staticContent },
  };
}

const request = async (id) => {
  if (id != null && id !== undefined) {
    console.log("Request");
    const req = await fetch(`/api/appointment/${id}`, {
      method: "POST",
    });
    console.log(await req.json());
  }
};

export default function ConfirmPageFinal({ staticContent }) {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    request(id);
  }, [id]);

  return (
    <Page StaticContent={staticContent}>
      <div className={Styles.wrapper}>
        <div className={Styles.content}>
          <h1>Agendamento confirmado</h1>
          <p>Entraremos em contado com mais detalhes</p>
        </div>
      </div>
    </Page>
  );
}
