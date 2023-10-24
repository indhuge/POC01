import { Button } from "@tremor/react";
import { PrismicRichText } from "@prismicio/react";
import { asText } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import Styles from "./CallToSurvey.module.scss";
import { useRouter } from "next/router";

/**
 * @typedef {import("@prismicio/client").Content.CallToSurveySlice} CallToSurveySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CallToSurveySlice>} CallToSurveyProps
 * @param {CallToSurveyProps}
 */
const CallToSurvey = ({ slice }) => {
  const router = useRouter();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className={
          "container mx-auto w-screen py-0 my-2 grid grid-col-1 grid-row-1 overflow-hidden rounded"
        }
      >
        <PrismicNextImage
          className="h-12 row-start-1 col-start-1 w-screen object-cover"
          field={slice.primary.background}
        />
        <div className="flex items-center px-4 row-start-1 col-start-1 backdrop-blur-xl">
          <div className="grow">
            <h2 className="text-xl w-fit h-fit text-black">
              {asText(slice.primary.title)}
            </h2>
            <p className="text-black text-[1.3rem]">
              Ajude-nos a continuar crescendo
            </p>
          </div>

          <Button
            className="w-fit h-1 mx-10 hover:scale-110 transition-all duration-300"
            onClick={() => router.push("/survey")}
          >
            {slice.primary.call_to_action}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToSurvey;
