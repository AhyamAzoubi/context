import { createContext, useState } from "react";

const CounterContext = createContext([0, () => {}]);

export default CounterContext;

const CounterContextProvider = (props) => {
  const score = useState(0);
  return (
    <CounterContext.Provider value={score}>
      {props.children}
    </CounterContext.Provider>
  );
};
export { CounterContextProvider };
