import React, { useState } from "react";
import { ChatBot, UserInput } from "./ChatAndUser";
import { UserInput2 } from "./ChatAndUser";
import styles from "../styles/ContactMe.module.css";

const steps = [
  {
    field: "name",
    getBotMessage: () => "Hey there, may I please know your name?",
  },
  {
    field: "email",
    getBotMessage: (userInput) =>
      `Hello ${userInput.name}, could you please tell me your email?`,
  },
  {
    field: "message",
    getBotMessage: (userInput) =>
      `Cool ${userInput.name}! What's your message?`,
  },
];

function ContactMe() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [step, setStep] = useState(0);
  const [editingField, setEditingField] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (field, value) => {
    if (
      field === "email" &&
      (!value.includes("@") || value.startsWith("@") || value.endsWith("@"))
    ) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setUserInput((prev) => ({ ...prev, [field]: value }));
    if (step < steps.length && editingField == null) {
      setStep((prev) => prev + 1);
    }
    setEditingField(null);
  };

  const handleEdit = (field) => {
    setEditingField(field);
    setError("");
  };

  const handleFormSubmit = () => {
    alert("Message Sent:\n" + JSON.stringify(userInput, null, 2));
  };

  return (
    <div className={styles.chatBubble}>
      <h1>Contact Me</h1>
      {steps.map((s, i) => {
        const showThisStep = i <= step;
        if (!showThisStep) return null;

        const botMsg =
          typeof s.getBotMessage === "function"
            ? s.getBotMessage(userInput)
            : s.getBotMessage;

        return (
          <div key={i} className={styles.chatBubblee}>
            <div className={styles.chatbot}>
              <ChatBot message={botMsg} />
              {/*<p>{botMsg}</p>*/}
            </div>

            <div className={styles.user}>
              {editingField === s.field ? (
                s.field === "message" ? (
                  <UserInput2
                    initialValue={userInput[s.field]}
                    onSubmit={(val) => handleSubmit(s.field, val)}
                  />
                ) : (
                  <UserInput
                    initialValue={userInput[s.field]}
                    onSubmit={(val) => handleSubmit(s.field, val)}
                  />
                )
              ) : userInput[s.field] ? (
                <div
                  className={styles.userText}
                  onClick={() => handleEdit(s.field)}
                >
                  {userInput[s.field]}
                </div>
              ) : i === step ? (
                step === steps.length - 1 ? (
                  <UserInput2 onSubmit={(val) => handleSubmit(s.field, val)} />
                ) : (
                  <UserInput onSubmit={(val) => handleSubmit(s.field, val)} />
                )
              ) : null}
              {error &&
                (editingField === s.field ||
                  (s.field === "email" && error)) && (
                  <div
                    style={{ color: "red", fontSize: "14px", marginTop: "4px" }}
                  >
                    {error}
                  </div>
                )}
            </div>
          </div>
        );
      })}

      {step >= steps.length && (
        <button className={styles.submitBtn} onClick={handleFormSubmit}>
          Send
        </button>
      )}
    </div>
  );
}

export default ContactMe;
