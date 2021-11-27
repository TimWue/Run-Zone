import { FunctionComponent, useContext, useEffect, useState } from "react";
import { CurrentRunContext } from "../../context/CurrentRunContext";
import { RunnerContext } from "../../context/RunnerContext";
import { createRunRepository } from "../../domain/run/RunRepository";
import { Button, ButtonGroup } from "react-bootstrap";

interface Props {}

export const CurrentRunControls: FunctionComponent<Props> = () => {
  const { addTrackPoint, startRun, stopRun, run, resetRun, isRunning } =
    useContext(CurrentRunContext);
  const { addRun, runs, runnerPosition } = useContext(RunnerContext);
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
    console.log("Save run", runs);
    if (runs.length > 0) {
      runRepository.saveRuns([...runs, run!]);
    } else {
      runRepository.saveRuns([run!]);
    }
    addRun(run!);
  };

  const handleReset = () => {
    console.log("Reset run");
    resetRun();
  };

  return (
    <ButtonGroup size="lg">
      <Button onClick={handleStart} disabled={isRunning} variant="dark">
        Start
      </Button>
      <Button onClick={handleStop} disabled={!isRunning} variant="dark">
        Stop
      </Button>
      <Button onClick={handleSave} disabled={isRunning} variant="dark">
        Save
      </Button>
      <Button onClick={handleReset} disabled={isRunning} variant="dark">
        Reset
      </Button>
    </ButtonGroup>
  );
};
