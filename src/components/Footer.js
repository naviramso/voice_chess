import { useState } from "react";
import { BsMic } from "react-icons/bs";
import "./styles.css";

const Footer = () => {
  const [mic, setMic] = useState(false);
  return (
    <div className="footer-container">
      <div className="footer">
        <button
          type="button"
          className="button-mic"
          onClick={() => {
            setMic(!mic);
          }}
        >
          <BsMic />
        </button>
      </div>
    </div>
  );
};

export default Footer;
