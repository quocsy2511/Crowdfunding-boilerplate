import { useState } from "react";

export default function useToggleValue(initialValue = false) {
  const [value, setValue] = useState(false);

  const handlerToggleValue = () => {
    setValue(!value);
  };

  return { value, handlerToggleValue };
}
