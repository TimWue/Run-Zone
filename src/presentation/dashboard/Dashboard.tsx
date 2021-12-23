import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { RunnerContext } from "../../context/RunnerContext";
import { CurrentRunContext } from "../../context/CurrentRunContext";
import { InfoCard } from "./InfoCard";
import styled from "styled-components";
import { createSensorRepository } from "../../domain/sensor/SensorRepository";
import { Subscription } from "rxjs";

export const Dashboard = () => {
  const { startTime, isRunning } = useContext(CurrentRunContext);
  const [runTime, setRunTime] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [runInterval, setRunInterval] = useState<any>();
  const [subscription, setSubscription] = useState<Subscription>();
  const sensorRepository = createSensorRepository();

  const updateRunTime = () => {
    startTime && setRunTime(Date.now() - startTime);
  };
  if (isRunning) {
  } else {
  }
  useEffect(() => {
    if (isRunning) {
      // Subscribe to velocity
      setSubscription(
        sensorRepository.observeMeasurement.subscribe(
          (m) => m.speed && setSpeed(m.speed)
        )
      );
      const id = setInterval(() => {
        updateRunTime();
      }, 1000);
      setRunInterval(id);
    } else {
      subscription && subscription.unsubscribe();
      runInterval && clearInterval(runInterval);
    }
  }, [isRunning]);

  return (
    <Container>
      <InfoCard property={"Speed"} value={speed.toFixed(1) + " km/h"} />
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
