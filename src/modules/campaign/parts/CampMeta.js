import React from "react";
import classNames from "../../../utils/classNames";

const CampMeta = ({ amount, text, size = "small" }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <h4
        className={classNames(
          "text-xs font-semibold text-text2",
          size === "small" ? "text-xs" : "text-xl"
        )}
      >{`${amount}`}</h4>
      <span
        className={classNames(
          "text-text4 ",
          size === "small" ? "text-xs" : "text-base"
        )}
      >
        {text}
      </span>
    </div>
  );
};

export default CampMeta;
