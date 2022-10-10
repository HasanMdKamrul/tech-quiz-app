import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { Nav } from "../components/Nav/Nav";
import { TopicsDataContext } from "../context/Context";

const Main = () => {
  const { data } = useLoaderData();

  return (
    <TopicsDataContext.Provider value={data}>
      <Nav />
      <Outlet />
    </TopicsDataContext.Provider>
  );
};

export default Main;
