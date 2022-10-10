import {
    ForwardIcon,
    PlayIcon,
    QuestionMarkCircleIcon
} from "@heroicons/react/24/solid";
import React from "react";
import { useNavigate } from "react-router-dom";

const QuizCard = ({ quiz: { name, logo, total, id } }) => {
  const navigate = useNavigate();

  const handlePlayQuiz = () => {
    navigate(`/quiz/${id}`);
  };

  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-gray-100 rounded shadow-2xl">
      <img src={logo} className="object-cover w-full h-64" alt="" />
      <div className="p-5 border border-t-0">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <a
            href="/"
            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
            aria-label="Category"
            title="traveling"
          >
            Frontend Tool
          </a>
          <span className="text-gray-600">
            - FrameWrok/Library/Version Control
          </span>
        </p>
        <div className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
          <div className="flex items-center">
            <ForwardIcon className="w-6 h-6 text-blue-700 mr-1" />
            {name}
          </div>
        </div>
        <p className="mb-2 text-slate-700 font-bold flex">
          <QuestionMarkCircleIcon className="w-6 h-6 text-sky-500 mr-1" />
          Questions: <span className="text-orange-500">{total}</span>
        </p>
        <button
          onClick={() => handlePlayQuiz()}
          className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide transition duration-200 rounded-xl shadow-md md:w-auto md:mr-4 md:mb-0 bg-sky-400 hover:bg-sky-600 focus:shadow-outline focus:outline-none"
        >
          <span className="mr-3 text-white">Play Quiz</span>
          <PlayIcon className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default QuizCard;
