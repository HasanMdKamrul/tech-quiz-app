import { HomeModernIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Tech quiz blog
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="27df4f81-c854-45de-942a-fe90f7a300f9"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Answer of</span>
          </span>{" "}
          three simple yet exciting questions
        </h2>
      </div>
      <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-3 border-b-2 border-b-gray-300">
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              What is the purpose of React-Router?
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Firstly, In order to understand how react-router works, you need
              to understand the basics of the client-side-routing and
              server-side-routing.In short, React router is an API for React
              applications. React router at it's core gives us the oppotunity or
              power to render our app dynamically in the client-side-routing. In
              contrary,in conventinal routing it will request the server every
              time for the information and render the data when it get's the
              data. In addition, react router allows us to build a
              single-page-application with navigation without the page
              refreshing as the user navigates.
            </p>
          </div>
        </div>
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              How does context API works?
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              First of all, The React Context API is a way for a React app to
              effectively produce global variables that can be passed around.
              This is the alternative to "prop drilling" or moving props from
              grandparent to child to parent, and so on. This is one of the best
              and lighter approach which comes built-in with react and give the
              developers so much freedom to use nested components data share and
              flow.
            </p>
          </div>
        </div>
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              What is useRef() hook in react?
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              In react, we know every time a value which is mutable, cause a
              re-render. Due to this re-render, performance impacted when a large
              component re-renders, due to that react provides something called
              useRef() which you can consider as a box , which stores the
              mutable data and prevents re-rendering. It can be used to access a
              DOM element directly as well.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-center">
        
        <Link
          rel="noopener noreferrer"
          to="/"
          className="px-8 py-3 font-semibold rounded bg-sky-400 text-white flex"
        >
            <HomeModernIcon className="w-6 h-6 mr-2"/>
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default Blog;
