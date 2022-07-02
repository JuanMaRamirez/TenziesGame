import { useState, useEffect, useRef } from "react";

function useWordGame(TIME_OF_THE_GAME = 10) {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(TIME_OF_THE_GAME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textRefArea = useRef(null);

  function handleChange(event) {
    const { value } = event.target;
    setText(value);
  }

  function countWordOfText(text) {
    const wordArr = text.trim().split(" ");
    return wordArr.filter((word) => word !== "").length;
  }

  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(TIME_OF_THE_GAME);
    setText("");
    setWordCount(0);
    textRefArea.current.disabled = false;
    textRefArea.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(countWordOfText(text));
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return [
    handleChange,
    textRefArea,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
  ];
}

export default useWordGame;
