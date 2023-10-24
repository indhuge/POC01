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

const data = {
  p1: {
    question: "Pergunta inicial",
    answers: [
      { text: "a", path: "p1a" },
      { text: "b", path: "p1b" },
    ],
  },
  p1a: {
    question: "Pergunta A",
    answers: [
      { text: "a", path: "END_AA" },
      { text: "b", path: "END_AB" },
    ],
  },
  p1b: {
    question: "Pergunta B",
    answers: [
      { text: "a", path: "END_BA" },
      { text: "b", path: "END_BB" },
    ],
  },
  END_AA: {
    question: "Final AA",
  },
};

function executeAction(_action, router) {
  if (_action == null || _action == undefined || _action == "none") return;

  const arr_action = _action.slice(1).split("=");
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
  }
}

export default function QuizPage({ staticContent, quiz_data: data }) {
  const router = useRouter();

  const [question, setQuestion] = useState(data.p1.question);
  const [answers, setAnswers] = useState(data.p1.answers);

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
        <div className="container mx-auto h-[50vh] py-5 flex flex-col justify-center align-center">
          <h2 className="text-lg py-3">{question}</h2>
          <div className="grid grid-cols-3 gap-1 w-1/2 mt-2">
            {answers?.map((e, i) => {
              return (
                <div
                  key={i}
                  className="px-2 py-2 rounded border-solid border-[1px] border-ascent hover:bg-ascent transition-all"
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
