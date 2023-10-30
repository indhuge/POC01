import Styles from "./Faq.module.scss";
import { createClient } from "@/prismicio";
import Page from "@/components/page";
import { getStaticContent } from "@/utils/StaticContent";
import { PrismicRichText } from "@prismicio/react";
import { useState, useEffect } from "react";
export async function getServerSideProps() {
  const client = createClient();
  const staticContent = getStaticContent(client);
  const faq_data = await client.getSingle("faq");

  return {
    props: {
      faq: await faq_data,
      staticContent: await staticContent,
    },
  };
}

export default function FaqPage({ faq, staticContent }) {
  console.log(faq);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  useEffect(() => {
    if (faq) {
      setIsLoading(false);
    }
  }, [faq]);

  const handleCardClick = (index) => {
    if (expandedCardIndex === index) {
      setExpandedCardIndex(null);
    } else {
      setExpandedCardIndex(index);
    }
  };

  return (
    <Page StaticContent={staticContent}>

      {isLoading ? (<div>Loading...</div>) : (

        <div className={Styles.faqContent}>
          <div>
            <h1 className={Styles.faqTitle}>{faq.data.faqtitle}</h1>
          </div>
          <div className={Styles.faqContainer}>
            {faq.data.faqquestion.map((item, index) => (
              <div
                className={`${Styles.faqCard} ${expandedCardIndex === index ? Styles.faqCardExpanded : ""
                  }`}
                key={index}
                onClick={() => handleCardClick(index)}
              >
                <h2 className={Styles.faqQuestion}>{item.question}</h2>
                {expandedCardIndex === index && (
                  <PrismicRichText className={Styles.faqAnswer} field={item.answer} />
                )}
              </div>
            ))}
          </div>
        </div>

      )}

    </Page>
  );
}