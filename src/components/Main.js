import { useContext } from "react";
import CounterContext from "./context/CounterContext";
import "./main.css";
const Main = () => {
  const [score, setScore] = useContext(CounterContext);
  const plusScore = () => {
    setScore(score + 10);
  };
  const minusScore = () => {
    setScore(score - 10);
  };
  return (
    <div className="container">
      <p className="score">Your current score {score} </p>
      <button className="btn" onClick={plusScore}>
        <span>Score +</span>
      </button>
      <button className="btn" onClick={minusScore}>
        <span>Score -</span>
      </button>
    </div>
  );
};

export default Main;
