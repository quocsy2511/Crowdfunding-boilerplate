import React from "react";
import classNames from "../../utils/classNames";

const Checkbox = ({ checked = false, onClick, name = "", children }) => {
  return (
    <div className="flex items-start gap-x-5 ">
      <div
        className={classNames(
          "inline-flex items-center justify-center p-1 w-5 h-5 text-white border dark:text-darkSecondary rounded cursor-pointer",
          checked ? "border-primary bg-primary" : "border-text4"
        )}
        // className={` inline-flex items-center justify-center p-1 w-5 h-5 text-white border dark:text-darkSecondary rounded cursor-pointer ${
        //   checked ? "border-primary bg-primary" : "border-text4"
        // }`}
        onClick={onClick}
      >
        <input
          type="checkbox"
          className="hidden"
          onChange={() => {}}
          name={name}
        />
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      {children && (
        <div onClick={onClick} className="text-text3">
          {children}
        </div>
      )}
    </div>
  );
};

export default Checkbox;
