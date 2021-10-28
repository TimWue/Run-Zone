import { FunctionComponent, useContext, useState } from "react";
import { CurrentRunContext } from "../../context/CurrentRunContext";
import { RunnerContext } from "../../context/RunnerContext";
import { createRunRepository } from "../../domain/run/RunRepository";

interface Props {}

export const CurrentRunControls: FunctionComponent<Props> = () => {
  const intervalDuration = 2000;
  const { addTrackPoint, startRun, stopRun, run } =
    useContext(CurrentRunContext);
  const { addRun, runs } = useContext(RunnerContext);
  const [runInterval, setRunInterval] = useState<any>();
  const runRepository = createRunRepository();

  const handleStart = () => {
    startRun();
    const interval = setInterval(() => {
      navigator.geolocation.getCurrentPosition(function (geoPosition) {
        addTrackPoint({
          latitude: geoPosition.coords.latitude,
          longitude: geoPosition.coords.longitude,
          time: Date.now(),
        });
      });
    }, intervalDuration);
    setRunInterval(interval);
  };

  const handleStop = () => {
    stopRun();
    clearInterval(runInterval);
  };

  const handleSave = () => {
    runRepository.saveRuns([...runs, run!]);
    addRun(run!);
  };

  return (
    <>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleSave}>Save</button>
    </>
  );
};
