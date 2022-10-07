import { useContext } from "react";
import CounterContext from "./context/CounterContext";

const Main = () => {
  const [score, setScore] = useContext(CounterContext);
  const plusScore = () => {
    setScore(score + 10);
  };
  const minusScore = () => {
    setScore(score - 10);
  };
  return (
    <div>
      <p>Your current score {score} </p>
      <button onClick={plusScore}>+</button>
      <button onClick={minusScore}>-</button>
    </div>
  );
};

export default Main;
