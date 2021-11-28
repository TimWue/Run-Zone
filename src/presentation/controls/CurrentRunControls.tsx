import { FunctionComponent, useContext, useEffect, useState } from "react";
import { CurrentRunContext } from "../../context/CurrentRunContext";
import { RunnerContext } from "../../context/RunnerContext";
import { createRunRepository } from "../../domain/run/RunRepository";
import { Button, ButtonGroup } from "react-bootstrap";
import styled from "styled-components";
import { Styles } from "../shared/Styles";

interface Props {}

export const CurrentRunControls: FunctionComponent<Props> = () => {
  const { addTrackPoint, startRun, stopRun, run, pauseRun, isRunning } =
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
    isRunning ? pauseRun() : startRun();
  };

  const handleSave = () => {
    stopRun().then((finishedRun) => {
      console.log("Save run");
      if (finishedRun) {
        if (runs.length > 0) {
          runRepository.saveRuns([...runs, finishedRun]);
        } else {
          runRepository.saveRuns([finishedRun]);
        }
        addRun(finishedRun);
      }
    });
  };

  return (
    <Buttons>
      <StartButton onClick={handleStart}>
        {" "}
        {isRunning ? "Pause" : "Start"}
      </StartButton>
      <EndButton onClick={handleSave}>End</EndButton>
    </Buttons>
  );

  /* return (
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
  );*/
};

const Buttons = styled.div`
  width: 100%;
  height: 10%;
  color: black;
  display: flex;
  text-align: center;
  justify-content: space-between;
`;

const ButtonBase = styled.button`
  background-color: ${Styles.BACKGROUND_COLOR_SECOND};
  font-size: ${Styles.FONT_SIZE_NORMAL};
  color: inherit;
  border: none;
  border-radius: 2px;
  padding: 10px 0;
  font-weight: bolder;
  &:focus {
    outline: none;
  }
`;

const StartButton = styled(ButtonBase)`
  width: 65%;
`;

const EndButton = styled(ButtonBase)`
  width: 35%;
`;
