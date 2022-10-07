import { useContext } from "react";
import CounterContext from "./context/CounterContext";

const Footer = () => {
  const [score] = useContext(CounterContext);
  return (
    <div>
      <p>{score >= 100 ? "Good job" : "Bring den über hundert"}</p>
    </div>
  );
};

export default Footer;
