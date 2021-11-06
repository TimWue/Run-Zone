import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { RunnerContext } from "../../context/RunnerContext";
import { CurrentRunContext } from "../../context/CurrentRunContext";

type Props = {};
export const Dashboard = (props: Props) => {
  const { runnerSpeed } = useContext(RunnerContext);
  const { startTime, isRunning } = useContext(CurrentRunContext);
  const [runTime, setRunTime] = useState(0);
  const [runInterval, setRunInterval] = useState<any>();

  const updateRunTime = () => {
    console.log("RunTime: ", runTime);
    console.log("StartTime: ", startTime);
    console.log("Now: ", Date.now());
    startTime && setRunTime(Date.now() - startTime);
  };

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        updateRunTime();
      }, 1000);
      setRunInterval(id);
    } else {
      runInterval && clearInterval(runInterval);
    }
  }, [isRunning]);

  return (
    <>
      <h3>Speed: {runnerSpeed}</h3>
      <h3>Time: {new Date(runTime).toISOString().substr(11, 8)}</h3>
    </>
  );
};
