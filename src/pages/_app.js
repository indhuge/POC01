import { repositoryName } from "@/prismicio";
import "@/styles/globals.scss";
import { PrismicPreview } from "@prismicio/next";
import { useRouter } from "next/router";
import { createClient } from "@/prismicio";
import StaticContent from "@/utils/StaticContent";
import "@/components/Calendar/React_calendar.scss";
import { motion, AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.pathname}
        initial="pageInitial"
        animate="pageAnimate"
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
          pageExit: {
            opacity: 0,
          },
        }}
      >
        <div key={router.pathname}>
          <Component {...pageProps} />
          <PrismicPreview repositoryName={repositoryName} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
