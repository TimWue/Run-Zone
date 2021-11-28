import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { RunnerContext } from "../../context/RunnerContext";
import { CurrentRunContext } from "../../context/CurrentRunContext";
import { InfoCard } from "./InfoCard";
import styled from "styled-components";

export const Dashboard = () => {
  const { runnerSpeed } = useContext(RunnerContext);
  const { startTime, isRunning } = useContext(CurrentRunContext);
  const [runTime, setRunTime] = useState(0);
  const [runInterval, setRunInterval] = useState<any>();

  const updateRunTime = () => {
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
    <Container>
      <InfoCard
        property={"Speed"}
        value={runnerSpeed ? runnerSpeed + " km/h" : "  0 km/h"}
      />
      <InfoCard
        property={"Time"}
        value={new Date(runTime).toISOString().substr(11, 8)}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 15%;
  flex-wrap: wrap;
`;
