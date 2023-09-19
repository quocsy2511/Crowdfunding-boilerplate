import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../common/ErrorComponent";

const ButtonGoogle = ({ text, onClick }) => {
  return (
    <button
      className="flex items-center justify-center w-full py-3 mb-4 border border-solid border-text4 rounded-xl gap-x-3 
    "
      onClick={onClick}
    >
      <img src="/Google.png" alt="icon" />
      <span className="text-sm font-semibold text-text2 dark:text-white dark:border-darkStrock">
        {text}
      </span>
    </button>
  );
};

export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: ErrorComponent,
});
