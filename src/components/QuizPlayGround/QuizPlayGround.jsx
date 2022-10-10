import React from "react";
import { useLoaderData } from "react-router-dom";
import QuestionsAndAnswers from "../QuestionsAndAnswers/QuestionsAndAnswers";

const QuizPlayGround = () => {
  const { data:{name,questions}  } = useLoaderData();

  console.log(questions)

  
  return (
    <div>
      <h1 className="text-5xl font-extrabold text-center my-5">Quiz and Answer</h1>
      <div>
        <h2 className="text-center text-3xl font-blod my-5">Quiz Related to - {name}</h2>
       <div className="flex justify-center">
        <div className="grid md:grid-cols-1 p-5 bg-sky-400 border rounded-2xl text-white ">
                {
                    questions.map(questionItem => <QuestionsAndAnswers questionItem={questionItem} key={questionItem.id} />)
                }
            </div>
       </div>
      </div>
    </div>
  );
};

export default QuizPlayGround;
