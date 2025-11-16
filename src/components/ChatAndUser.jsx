// ChatAndUser.jsx
import { useState, useEffect } from "react";
import styles from "../styles/ContactMe.module.css";

export const ChatBot = ({ message }) => {
  if (!message || typeof message !== "string") return null;

  return <TypingText text={message} speed={70} />;
};

export const UserInput = ({ initialValue = "", onSubmit }) => {
  const [value, setValue] = useState(initialValue);

  const handleKeyDown = (e) => {
    if (
      e.key === "Enter" &&
      !e.shiftKey &&
      !e.ctrlKey &&
      !e.altKey &&
      !e.metaKey
    ) {
      e.preventDefault();
      if (value.trim()) {
        onSubmit(value.trim());
        setValue("");
      }
    }
  };

  return (
    <input
      className={styles.userInput}
      type="text"
      value={value}
      placeholder="Type here..."
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
      autoFocus
    />
  );
};

export const UserInput2 = ({ initialValue = "", onSubmit }) => {
  const [value, setValue] = useState(initialValue);

  const handleKeyDown = (e) => {
    if (
      e.key === "Enter" &&
      !e.shiftKey &&
      !e.ctrlKey &&
      !e.altKey &&
      !e.metaKey
    ) {
      e.preventDefault();
      if (value.trim()) {
        onSubmit(value.trim());
        setValue("");
      }
    }
  };

  return (
    <textarea
      rows={4}
      cols={60}
      className={styles.userInput}
      type="text"
      value={value}
      placeholder="Type here..."
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
      autoFocus
    />
  );
};

export const TypingText = ({ text = "", speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    async function animateText() {
      setDisplayedText("");
      setTypingDone(false);

      for (let i = 0; i < text.length; i++) {
        if (isCancelled) break;
        setDisplayedText((prev) => prev + text[i]);
        await new Promise((res) => setTimeout(res, speed));
      }

      if (!isCancelled) {
        setTypingDone(true);
      }
    }

    if (typeof text === "string" && text.length > 0) {
      animateText();
    }

    return () => {
      isCancelled = true;
    };
  }, [text, speed]);

  return (
    <p className={styles.typingText}>
      {displayedText}
      {!typingDone && <span className={styles.cursor}>|</span>}
    </p>
  );
};
