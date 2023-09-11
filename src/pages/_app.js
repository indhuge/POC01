import { repositoryName } from "@/prismicio";
import "@/styles/globals.scss";
import { PrismicPreview } from "@prismicio/next";
import { useRouter } from "next/router";
import { createClient } from "@/prismicio";
import StaticContent from "@/utils/StaticContent";

async function setContent() {
  const page = await createClient().getSingle("homepage");

  Object.keys(page.data).forEach((k) => {
    if (k != "Slices") StaticContent[k] = page.data[k];
  });
}

export default function App({ Component, pageProps }) {
  const router = useRouter();
  setContent();
  return (
    <div key={router.pathname}>
      <Component {...pageProps} />
      <PrismicPreview repositoryName={repositoryName} />
    </div>
  );
}
