import { useState, useEffect } from "react";
import CustomCard from "./components/Card";

export default function MyApp() {
  const utcTimestamp = new Date().getTime();
  const gmtDateTime = new Date().toLocaleString();

  const [, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div>
        <div> Current UTC Timestamp is {utcTimestamp} </div>
        <div> Current GMT Time is {gmtDateTime} </div>
      </div>
      <div>
        <CustomCard
          mode={"TEXT"}
          content={{
            text: "Hello",
          }}
          color={"lightblue"}
          duration={0}
        />
      </div>
    </>
  );
}
