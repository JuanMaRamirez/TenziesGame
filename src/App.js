import "./App.css";
import useWordGame from "./useWordGame";

function App() {
  const [
    handleChange,
    textRefArea,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount,
  ] = useWordGame(10);
  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
        ref={textRefArea}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining:{timeRemaining}</h4>
      <button disabled={isTimeRunning} onClick={startGame}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
