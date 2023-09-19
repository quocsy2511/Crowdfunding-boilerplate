import React from "react";
import { useController } from "react-hook-form";

const Textarea = (props) => {
  const { control, name, placeholder = "", children, ...rest } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });

  return (
    <textarea
      className="resize-none min-h-[140px] outline-none dark:placeholder:text-darkStrock w-full px-6 py-4 text-sm font-medium border  rounded-xl  dark:bg-transparent dark:text-text3 bg-transparent "
      placeholder={placeholder}
      {...rest}
      {...field}
    ></textarea>
  );
};

export default Textarea;
