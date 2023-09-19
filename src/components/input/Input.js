import React from "react";
import { useController } from "react-hook-form";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../common/ErrorComponent";
import classNames from "../../utils/classNames";

const Input = (props) => {
  //...rest là những field còn lại
  const {
    control,
    name,
    type = "text",
    error = "",
    placeholder = "",
    children,
    ...rest
  } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        //ở đây sử dụng 1 cái funciton classNames để viết cho dễ nhìn, gọn hơn(tôi không chắc vì phải viết thêm 1 cái thư viện :D ncl nhìn pro hơn) hơn vì có thêm điều kiện
        //chỉ nên dùng khi className có thêm điều kiện
        className={classNames(
          "dark:placeholder:text-darkStrock w-full px-6 py-4 text-sm font-medium border  rounded-xl  dark:bg-transparent dark:text-text3 bg-transparent ",
          error.length > 0
            ? "border-error text-error"
            : "border-strock text-text1 dark:border-darkStrock",
          children ? "pr-16" : ""
        )}
        // className={`dark:placeholder:text-darkStrock w-full px-6 py-4 text-sm font-medium border  rounded-xl  dark:bg-transparent dark:text-text3
        // ${
        //   error.length > 0
        //     ? "border-error text-error"
        //     : "border-text4 text-text1 dark:border-darkStrock"
        // } ${children ? "pr-16" : ""}`}

        placeholder={error.length > 0 ? "" : placeholder}
        {...field} //chứa các thuộc tính của thằng react-hook-form
        {...rest} // chứa các thuộc tính ngoài thằn react-hook-form như là placehoder ......
      />
      {error.length > 0 && (
        <span className="absolute  text-sm font-medium pointer-events-none text-error top-1/3 -trans-y-2/4 left-6 error_input ">
          {error}
        </span>
      )}
      {children && (
        <span className="absolute right-6 top-1/3 -trans-y-2/4 cursor-pointer select-none dark:text-text3">
          {children}
        </span>
      )}
    </div>
  );
};

export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
