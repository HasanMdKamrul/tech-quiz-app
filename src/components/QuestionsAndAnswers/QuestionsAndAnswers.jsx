import { EyeIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { IndividualTopicContext } from "../../context/Context";
import OptionAnswer from "../OptionAnswer/OptionAnswer";

const QuestionsAndAnswers = () => {
 

  const {question,correctAnswer,options} = useContext(IndividualTopicContext);



  const correctAnswerDisplay = () => {
    toast.info(`${correctAnswer}`, {
      position: "top-right",
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "light",
    });
  };

  return (
    <div className="bg-sky-100 p-5 rounded-2xl m-2">
      <div className="flex justify-between ">
        <div>
        <h1 className="text-xl font-bold">Question : {question}</h1>
        </div>
        <div>
        <EyeIcon
          onClick={correctAnswerDisplay}
          className="w-6 h-6 text-black"
        />
        </div>
        
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
