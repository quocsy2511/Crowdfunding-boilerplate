import React from "react";
import classNames from "../../../utils/classNames";

const CampTitle = ({ children, className = "font-semibold mb-1" }) => {
  return <h3 className={classNames("text-text1 ", className)}>{children}</h3>;
};

export default CampTitle;
