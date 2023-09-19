import React from "react";
import classNames from "../../../utils/classNames";

const CampDes = ({ children, className = "text-sm mb-4" }) => {
  return (
    <p className={classNames("text-text3 text-xs font-normal", className)}>
      {children}
    </p>
  );
};

export default CampDes;
