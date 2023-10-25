import Page from "@/components/page";
import { createClient } from "@/prismicio";
import { getStaticContent } from "@/utils/StaticContent";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export async function getStaticProps() {
  const client = createClient();
  const quiz_data = await client.getSingle("quiz");
  const staticContent = getStaticContent(client);
  const finalObj = {};
  const temp = quiz_data.data.slices.map((e) => {
    return {
      question: e.primary.question,
      questionid: e.primary.questionid,
      action: e.primary.action,
      answers: e.items.map((i) => {
        return {
          text: i.anwser,
          path: i.path,
        };
      }),
    };
  });
  temp.forEach((e) => {
    finalObj[e.questionid] = e;
  });

  return {
    props: { staticContent: await staticContent, quiz_data: finalObj },
  };
}

export default function QuizPage({ staticContent, quiz_data: data }) {
  const router = useRouter();
  const [question, setQuestion] = useState(data.p1.question);
  const [answers, setAnswers] = useState(data.p1.answers);

  const reset = () => {
    setQuestion(data.p1.question);
    setAnswers(data.p1.answers);
  };

  const executeAction = (_action, router) => {
    if (_action == null || _action == undefined || _action == "none") return;

    const all = _action.split("&&");

    all.forEach((a) => {
      const arr_action = a.slice(1).split("=");
      const action = arr_action[0];
      const param = arr_action[1];

      switch (action) {
        case "alert": {
          alert(param);
          break;
        }
        case "redirect": {
          router.push(param);
          break;
        }
        case "log": {
          console.log(param);
          break;
        }
        case "reset": {
          reset();
          break;
        }
        case "path": {
          onOptionClicked(param);
        }
      }
    });
  };

  const onOptionClicked = (path) => {
    if (path.charAt(0) == "!") {
      executeAction(path, router);
    } else {
      setQuestion(data[path].question);
      setAnswers(data[path].answers);
    }
  };

  return (
    <Page StaticContent={staticContent}>
      <motion.div
        key={question}
        initial="hide"
        animate={"show"}
        variants={{
          show: {
            opacity: 1,
            y: 0,
            transition: {
              ease: "easeInOut",
              duration: 0.3,
            },
          },
          hide: {
            y: -20,
            opacity: 0,
          },
        }}
      >
        <div className="container mx-10 h-[50vh] py-5 flex flex-col justify-center align-center">
          <h2 className="text-xl py-3">{question}</h2>
          <div className="grid  grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-1 w-1/2 mt-2">
            {answers?.map((e, i) => {
              return (
                <div
                  key={i}
                  className="flex items-center justify-center px-1 py-1 rounded border-solid border-[1px] border-ascent hover:bg-ascent transition-all"
                  onClick={() => onOptionClicked(e.path)}
                >
                  <p className="text-center">{e.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </Page>
  );
}
