import { useState, useEffect } from "react";
import "../styles/Clock.css";
const Clock = (props) => {
  const initialTime = 60; // 10 minutos en segundos
  const [time, setTime] = useState(initialTime);
  const [isPaused, setIsPaused] = useState(props.black);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    let interval;

    if (!isPaused && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPaused, time]);
  useEffect(() => {
    setIsPaused((prevPaused) => !prevPaused);
  }, [props.turnInfo]);

  return (
    <>
      <div className="Clock">
        <div className="time-box">
          <p className="time">{formatTime(time)}</p>
        </div>
      </div>
    </>
  );
};

export default Clock;
