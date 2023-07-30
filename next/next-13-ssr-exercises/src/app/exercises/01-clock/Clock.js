"use client";
import React from "react";
import format from "date-fns/format";

function Clock() {
  const [isClient, setIsClient] = React.useState(false);
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    setIsClient(true);
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 50);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="clock">
      {isClient ? format(time, "HH:mm:ss") : "Loading..."}
    </p>
  );
}

export default Clock;
