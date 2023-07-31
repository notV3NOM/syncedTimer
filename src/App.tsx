import { useState, useEffect } from "react";

export default function MyApp() {

  const utcTimestamp = new Date().getTime();
  const gmtDateTime = new Date().toLocaleString();

  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div> Current UTC Timestamp is {utcTimestamp} </div>
      <div>  Current GMT Time is {gmtDateTime} </div>
    </div>
  );
}