import { useState } from "react";
import { ChatAndUser_Practice } from "./ChatAndUser_Practice";

function ContactMe_Practice() {
  const [step, setStep] = useState(0);
  const [edit, setEdit] = useState(null);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const steps = [
    {
      field: "name",
      message: "Hey there! may I please know your name!",
    },
    {
      field: "email",
      message: (userInput) => `Hello ${userInput.name} tell the email`,
    },
    {
      field: "message",
      message: (userInput) => `Hello ${userInput.name} any message`,
    },
  ];

  function handleSubmit(val, field) {
    setUserInput((prev) => ({
      ...prev,
      [field]: val,
    }));

    setStep((prev) => prev + 1);
  }

  function handleClick(ind) {
    setEdit(ind);
  }

  return (
    <div>
      {steps.map((mes, i) => {
        if (i > step) return null;

        const botMessage =
          typeof mes.message === "function"
            ? mes.message(userInput)
            : mes.message;

        return (
          <div>
            <p>{botMessage}</p>
            <ChatAndUser_Practice
              onSubmit={(val) => handleSubmit(val, mes.field)}
              initialValue={userInput[mes.field]}
              onClick={() => handleClick(i)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ContactMe_Practice;
