import { FunctionComponent, useContext, useState } from "react";
import { CurrentRunContext } from "../../context/CurrentRunContext";
import { RunnerContext } from "../../context/RunnerContext";
import { createRunRepository } from "../../domain/run/RunRepository";

interface Props {}

export const CurrentRunControls: FunctionComponent<Props> = () => {
  const { addTrackPoint, startRun, stopRun, run, setSpeed, resetRun } =
    useContext(CurrentRunContext);
  const { addRun, runs } = useContext(RunnerContext);
  const [isRunning, setIsRunning] = useState(false);
  const [watchId, setWatchId] = useState<number>();
  const runRepository = createRunRepository();
  const geoLocationOptions = { enableHighAccuracy: true };

  const handleStart = () => {
    startRun();
    const id = navigator.geolocation.watchPosition(
      geoLocationSuccessCallback,
      geoLocationErrorCallback,
      geoLocationOptions
    );
    setWatchId(id);
    setIsRunning(true);
  };

  const handleStop = () => {
    stopRun();
    watchId && navigator.geolocation.clearWatch(watchId);
    setIsRunning(false);
  };

  const handleSave = () => {
    console.log("Save run");
    runRepository.saveRuns([...runs, run!]);
    addRun(run!);
  };

  const handleReset = () => {
    console.log("Reset run");
    resetRun();
  };

  const geoLocationErrorCallback = (err: any) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  const geoLocationSuccessCallback = (geoPosition: GeolocationPosition) => {
    console.log("Speed: ", geoPosition.coords.speed);
    setSpeed(geoPosition.coords.speed);
    addTrackPoint({
      latitude: geoPosition.coords.latitude,
      longitude: geoPosition.coords.longitude,
      time: Date.now(),
    });
  };

  return (
    <>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={handleSave} disabled={isRunning}>
        Save
      </button>
      <button onClick={handleReset} disabled={isRunning}>
        Reset
      </button>
    </>
  );
};
