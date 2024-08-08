//timer.js
import { useEffect } from "react";

export default function Timer({ time, setTime, timerActive }) {
  useEffect(() => {
    let interval = null;
    if (timerActive)
      interval = setInterval(() => {
        setTime((time) => time + 1); // counting time where delay is 1000 miliseconds
      }, 1000);
    else clearInterval(interval); //
    return () => {
      clearInterval(interval); // stoping the timer
    };
  }, [timerActive]);

  return <p>Time taken: {time}s</p>;
}
