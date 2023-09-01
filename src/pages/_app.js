import { repositoryName } from "@/prismicio";
import "@/styles/globals.scss";
import { PrismicPreview } from "@prismicio/next";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <PrismicPreview repositoryName={repositoryName} />
    </>
  );
}
