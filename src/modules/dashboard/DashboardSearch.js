import React, { useState } from "react";
import { defaultImage } from "../../constants/global";

const DashboardSearch = ({ image = defaultImage }) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="relative">
      <div
        className="bg-white rounded-full shadow-[10px_10px_20px_0px rgba(218,_213,_213,_0.15)] p-2 
    flex items-center relative z-50"
      >
        <div className="flex-1 px-5">
          <input
            type="text"
            placeholder="Do fundrise now"
            className="bg-transparen placeholder:text-text4 text-text1 w-full"
          />
        </div>
        <button className="w-[72px] flex items-center h-[40px] bg-primary justify-center rounded-full flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white font-medium"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>

      {showSearch && (
        <div className="search-result lg:w-[843px] w-full bg-white absolute top-full left-0 z-50 translate-y-5 pb-6 rounded-3xl">
          <div className="flex items-center justify-between p-3 bg-graySoft rounded-3xl ">
            <h4 className="text-sm font-medium pl-4 cursor-pointer underline">
              See all 10,124 fundraisier
            </h4>
            <button className="flex items-center justify-center w-[72px] h-[50px] bg-red-100 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-error"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="p-6 pb-0">
            <div className="flex flex-col  gap-y-5  cursor-pointer mb-6 ">
              <SearchItem image={image}></SearchItem>
              <SearchItem image={image}></SearchItem>
              <SearchItem image={image}></SearchItem>
              <SearchItem image={image}></SearchItem>
            </div>
            <h3 className="mb-4 text-sm font-semibold">Related searches</h3>
            <div className="flex flex-col text-sm gap-y-3 text-text2">
              <p>
                <strong>education </strong>
                fund
              </p>
              <p>schoralship fund</p>
              <p>
                <strong>education </strong>
                and schools fund
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SearchItem = ({ image }) => {
  return (
    <div className="flex items-center gap-x-5">
      <img
        src={image}
        alt=""
        className="w-[50px] h-[50px] rounded-lg object-cover"
      />
      <div className="flex-1 text-sm">
        <h3 className="mb-1 ">
          <strong>Education </strong>
          fund for Durgham Family
        </h3>
        <p className="text-text3 mb-1">By Durgham Family</p>
      </div>
    </div>
  );
};
export default DashboardSearch;
