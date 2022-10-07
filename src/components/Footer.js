import { useContext } from "react";
import CounterContext from "./context/CounterContext";
import "./footer.css";

const Footer = () => {
  const [score] = useContext(CounterContext);
  return (
    <div className="footer">
      <p className="foot">
        {score >= 100 ? "Good job" : "Bring den über hundert"}
      </p>
    </div>
  );
};

export default Footer;
