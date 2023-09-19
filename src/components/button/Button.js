import React from "react";
import classNames from "../../utils/classNames";
import { Link } from "react-router-dom";

const Button = ({
  type = "button",
  children,
  className = "",
  isLoading = false,
  ...rest
}) => {
  let defaultClassName =
    "flex items-start justify-center py-4 text-base font-semibold min-h[56px] rounded-xl  py-3 px-6 ";
  switch (rest.kind) {
    case "primary":
      defaultClassName = defaultClassName + " bg-primary text-white ";
      break;
    case "secondary":
      defaultClassName = defaultClassName + " text-white bg-secondary ";
      break;
    case "ghost":
      defaultClassName =
        defaultClassName + " bg-secondary bg-opacity-20 text-secondary ";
      break;

    default:
      break;
  }

  const child = !!isLoading ? (
    <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent border-b-transparent animate-spin"></div>
  ) : (
    children
  );

  if (rest.href) {
    return (
      <Link to={rest.href} className={classNames(defaultClassName, className)}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classNames(
        defaultClassName,
        !!isLoading ? "opacity-50 pointer-events-none" : "",
        className
      )}
    >
      {child}
    </button>
  );
};

export default Button;
