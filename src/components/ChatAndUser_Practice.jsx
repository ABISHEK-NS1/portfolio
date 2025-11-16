import React, { useEffect, useState } from "react";

export const ChatAndUser_Practice = ({ onSubmit, initialValue }) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  function handleSubmit(e) {
    if (e.key == "Enter") {
      onSubmit(value);
      setValue("");
    }
  }

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => handleSubmit(e)}
      autoFocus
    />
  );
};
