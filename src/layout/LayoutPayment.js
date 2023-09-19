import React from "react";
import { Link, Outlet } from "react-router-dom";
import { defaultImage } from "../constants/global";

const LayoutPayment = ({ back = "/" }) => {
  return (
    <div className="p-10">
      <div className="max-w-[1170px] mx-auto">
        <div className="mb-10">
          <div className="flex - items-center justify-between mb-2">
            <Link to="/" className="inline-block  lg:mb-16">
              <img src="/Logo.png" alt="home" />
            </Link>
            <img
              alt="authorCampaignView"
              src={defaultImage}
              className="rounded-full w-[60px] h-[60px] object-cover overflow-hidden inline-block  lg:mb-16"
            />
          </div>
          <Link to={back} className="flex items-center gap-x-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M7.793 2.232a.75.75 0 01-.025 1.06L3.622 7.25h10.003a5.375 5.375 0 010 10.75H10.75a.75.75 0 010-1.5h2.875a3.875 3.875 0 000-7.75H3.622l4.146 3.957a.75.75 0 01-1.036 1.085l-5.5-5.25a.75.75 0 010-1.085l5.5-5.25a.75.75 0 011.06.025z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xl font-semibold leading-normal text-primary ">
              Back
            </span>
          </Link>
        </div>

        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default LayoutPayment;
