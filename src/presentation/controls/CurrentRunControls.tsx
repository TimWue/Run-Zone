import { FunctionComponent, useContext, useEffect, useState } from "react";
import { CurrentRunContext } from "../../context/CurrentRunContext";
import { RunnerContext } from "../../context/RunnerContext";
import { createRunRepository } from "../../domain/run/RunRepository";

interface Props {}

export const CurrentRunControls: FunctionComponent<Props> = () => {
  const { runnerPosition } = useContext(RunnerContext);
  const { addTrackPoint, startRun, stopRun, run, resetRun, isRunning } =
    useContext(CurrentRunContext);
  const { addRun, runs } = useContext(RunnerContext);
  const runRepository = createRunRepository();

  useEffect(() => {
    isRunning && savePositionAsTrack();
  }, [runnerPosition]);

  const savePositionAsTrack = () => {
    runnerPosition &&
      addTrackPoint({
        latitude: runnerPosition.lat,
        longitude: runnerPosition.lng,
        time: Date.now(),
      });
  };

  const handleStart = () => {
    startRun();
  };

  const handleStop = () => {
    stopRun();
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
