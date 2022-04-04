import React from "react";
import MyLineChart from "../MyLineChart/MyLineChart";

const Dashboard = () => {
  return (
    <div className="mx-32">
      <h1 className="text-center text-2xl my-8">
        Awesome
        <span className="italic underline decoration-green-600">Chart</span>
      </h1>
      <MyLineChart></MyLineChart>
    </div>
  );
};

export default Dashboard;
