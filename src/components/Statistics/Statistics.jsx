import { HomeModernIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import { TopicsDataContext } from "../../context/Context";

const Statistics = () => {
  const topicsData = useContext(TopicsDataContext);

  return (
    <div>
      <h1 className="text-center my-5 text-5xl font-extrabold">
        Total Number of Quizes
      </h1>
      <div className="flex justify-center">
        <section>
          <BarChart
            width={500}
            height={300}
            data={topicsData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" stackId="a" fill="#8884d8" />
          </BarChart>
        </section>
      </div>
      <div className="mt-5 flex justify-center">
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
  );
};

export default Statistics;
