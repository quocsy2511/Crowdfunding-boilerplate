import React from "react";
import { IconFolder } from "../../../components/icons";
import { Link } from "react-router-dom";
import classNames from "../../../utils/classNames";

const CampCategory = ({ text, className = "text-xs mb-4" }) => {
  return (
    <Link
      to="/"
      className={classNames(
        "flex items-baseline gap-x-3 font-medium mb-4 text-text3 cursor-pointer",
        className
      )}
    >
      <IconFolder />
      <span className="flex items-center">{text}</span>
    </Link>
  );
};

export default CampCategory;
