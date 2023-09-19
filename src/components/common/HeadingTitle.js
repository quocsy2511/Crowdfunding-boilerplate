import React from "react";

const HeadingTitle = ({ children, className, number }) => {
  return (
    <h2 className={`text-lg font-semibold text-text1 mb-5 ${className}`}>
      {children}{" "}
      {number && <span className="text-secondary">{`(${number})`}</span>}
    </h2>
  );
};

export default HeadingTitle;
