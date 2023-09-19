import React from "react";

const Label = (props) => {
  const { children, htmlFor = "", className = "" } = props;
  return (
    <label
      htmlFor={htmlFor} //lấy id :D
      className={`inline text-sm font-medium cursor-pointer textbg-text2 dark:text-text3 ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
