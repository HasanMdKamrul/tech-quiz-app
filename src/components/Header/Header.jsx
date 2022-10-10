import { ArrowRightIcon, ChartBarIcon } from "@heroicons/react/24/solid";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import quizAnimation from "../../assests/quiz.json";

export const Header = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                Tech Quiz
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              An online platfrom for taking
              <br className="hidden md:block" />
              programming quizes{" "}
              <span className="inline-block text-deep-purple-accent-400">
                with a performance analysis
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              In this progressive web app you will find various programming
              topics for the interview preparation and a beautiful ui which will
              show you, your performance and many more.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link
              to="/blog"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide transition duration-200 rounded-xl shadow-md md:w-auto md:mr-4 md:mb-0 bg-sky-400 hover:bg-sky-600 focus:shadow-outline focus:outline-none"
            >
              <span className="mr-3 text-white">Go to Blog</span>
              <ArrowRightIcon className="w-6 h-6 text-white" />
            </Link>
            <Link
              to="/statistic"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide transition duration-200 rounded-xl shadow-md md:w-auto md:mr-4 md:mb-0 bg-sky-400 hover:bg-sky-600 focus:shadow-outline focus:outline-none"
            >
              <span className="mr-3 text-white">See Statistic</span>
              <ChartBarIcon className="w-6 h-6 text-white" />
            </Link>
          </div>
        </div>
        <div className="relative lg:w-1/2 flex justify-center">
          <Lottie animationData={quizAnimation} loop={true} />
        </div>
      </div>
    </div>
  );
};
