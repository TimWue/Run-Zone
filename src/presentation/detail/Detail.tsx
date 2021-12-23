import React, { FunctionComponent, useMemo, useState } from "react";

import styled from "styled-components";
import { Styles } from "../shared/Styles";

import { useParams } from "react-router";
import { createRunRepository } from "../../domain/run/RunRepository";
import { Chart } from "./chart/Chart";

export const Detail: FunctionComponent = () => {
  const { runId } = useParams<string>();
  const runRepository = createRunRepository();
  const run = useMemo(() => {
    return runRepository.getRun(runId!);
  }, [runId]);

  if (!run) return <div>No run found</div>;
  return (
    <Container>
      <Heading>{new Date(run.startTime).toISOString().slice(0, 10)}</Heading>
      <Chart run={run} />
    </Container>
  );
};

const Heading = styled.h1`
  color: white;
  font-weight: bold;
  font-family: ${Styles.FONT_FAMILY_MAIN};
  font-size: ${Styles.FONT_SIZE_LARGER};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100%;
  width: 100%;
`;
