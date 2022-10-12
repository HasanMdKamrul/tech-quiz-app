import {
  HomeModernIcon,
  ShieldCheckIcon,
  XMarkIcon
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  CorrectContext,
  InCorrectContext,
  IndividualTopicContext
} from "../../context/Context";
import QuestionsAndAnswers from "../QuestionsAndAnswers/QuestionsAndAnswers";

const QuizPlayGround = () => {
  const { data } = useLoaderData();

  const [correct, setCorrect] = useState([]);
  const [inCorrect, setInCorrect] = useState([]);

  const { name, questions } = data;



  

  //   console.log(questions)

  return (
    <CorrectContext.Provider value={[correct, setCorrect]}>
      <InCorrectContext.Provider value={[inCorrect, setInCorrect]}>
        <div>
          <h1 className="text-5xl font-extrabold text-center my-5">
            Quiz and Answer
          </h1>
          <div>
            <h2 className="text-center text-3xl font-blod my-5">
              Quiz Related to - {name}
            </h2>
            <div className="flex justify-center gap-2">
              {correct.length > 0 && (
                <kbd className="px-2 py-1.5 text-xs flex items-center font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                  <ShieldCheckIcon className="w-6 h-6" />
                  {correct.length}
                </kbd>
              )}
              {inCorrect.length > 0 && (
                <kbd className="px-2 py-1.5 text-xs flex items-center font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                  <XMarkIcon className="w-6 h-6" />
                  {inCorrect.length}
                </kbd>
              )}
            </div>

            <div className="flex justify-center">
              <div className="grid md:grid-cols-1 p-5 text-black ">
                {questions.map((questionItem,index) => {
                  return (
                    <IndividualTopicContext.Provider
                    
                      key={questionItem.id}
                      value={questionItem}
                    >
                      <QuestionsAndAnswers index={index} />
                    </IndividualTopicContext.Provider>
                  );
                })}
              </div>
            </div>
            <div className="my-5 flex justify-center">
              <Link
                rel="noopener noreferrer"
                to="/"
                className="px-8 py-3 font-semibold rounded bg-sky-400 text-white flex"
              >
                <HomeModernIcon className="w-6 h-6 mr-2" />
                Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </InCorrectContext.Provider>
    </CorrectContext.Provider>
  );
};

export default QuizPlayGround;
