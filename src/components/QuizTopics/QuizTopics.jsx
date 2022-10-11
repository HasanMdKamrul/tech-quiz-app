import React, { useContext } from "react";
import { TopicsDataContext } from "../../context/Context";
import QuizCard from "../QuizCard/QuizCard";

const QuizTopics = () => {
  const quizes = useContext(TopicsDataContext);

  return (
    <>
      <h1 className="text-5xl font-extrabold text-center">Tech Quizes</h1>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8  lg:grid-cols-4 sm:max-w-sm sm:mx-auto  md:max-w-full">
          {quizes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      </div>
    </>
  );
};

export default QuizTopics;
