import React from "react";
import DashboardSearch from "./DashboardSearch";
import { Button } from "../../components/button";
import DashboardFundrising from "./DashboardFundrising";
import { Link } from "react-router-dom";

const DashboardTopBar = () => {
  return (
    <div className=" flex items-center justify-between mb-8">
      <div className="flex flex-1 items-center gap-x-10 ml-3 ">
        <Link to="/" className="inline-block">
          <img src="/Logo.png" alt="crowfunding-app" />
        </Link>
        <div className="max-w-[458px] w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center gap-x-10 flex-1 justify-end">
        <DashboardFundrising />
        <Button href="/start-campaign" kind="secondary">
          Start a campaign
        </Button>
        <img src="/Logo.png" alt="crowfunding-app" className="rounded-full" />
      </div>
    </div>
  );
};

export default DashboardTopBar;
