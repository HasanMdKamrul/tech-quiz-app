import { EyeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { toast } from "react-toastify";
import OptionAnswer from "../OptionAnswer/OptionAnswer";

const QuestionsAndAnswers = ({
  questionItem,
  questionItem: { options, correctAnswer, question },
}) => {
  // console.log(questionItem)

  const correctAnswerDisplay = () => {
    toast.info(`${correctAnswer}`, {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "light",
    });
  };

  return (
    <div>
      <div className="flex justify-between ">
        <h1 className="text-xl font-bold">Question : {question}</h1>
        <EyeIcon
          onClick={correctAnswerDisplay}
          className="w-6 h-6 text-white"
        />
      </div>
      {options.map((option, index) => (
        <OptionAnswer
          key={index}
          correctAnswer={correctAnswer}
          option={option}
        />
      ))}
    </div>
  );
};

export default QuestionsAndAnswers;
