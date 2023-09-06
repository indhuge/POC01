import { repositoryName } from "@/prismicio";
import "@/styles/globals.scss";
import { PrismicPreview } from "@prismicio/next";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div key={router.pathname}>
      <Component {...pageProps} />
      <PrismicPreview repositoryName={repositoryName} />
    </div>
  );
}
