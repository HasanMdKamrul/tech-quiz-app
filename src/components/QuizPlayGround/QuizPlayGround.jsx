import React from "react";
import { useLoaderData } from "react-router-dom";
import { IndividualTopicContext } from "../../context/Context";
import QuestionsAndAnswers from "../QuestionsAndAnswers/QuestionsAndAnswers";

const QuizPlayGround = () => {
    const {data} = useLoaderData();

   
  const  {name,questions}   = data;

//   console.log(questions)

  
  return (
    
         <div>
      <h1 className="text-5xl font-extrabold text-center my-5">Quiz and Answer</h1>
      <div>
        <h2 className="text-center text-3xl font-blod my-5">Quiz Related to - {name}</h2>
       <div className="flex justify-center">
        <div className="grid md:grid-cols-1 p-5 text-black ">
                {
                    questions.map(questionItem => {
                        console.log(questionItem.id)
                        return(
                            <IndividualTopicContext.Provider key={questionItem.id} value={questionItem}>
                                <QuestionsAndAnswers   />
                            </IndividualTopicContext.Provider>
                        )
                    })
                }
            </div>
       </div>
      </div>
    </div>
    
   
  );
};

export default QuizPlayGround;
