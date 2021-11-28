import React, { FunctionComponent, useContext, useState } from "react";
import { RunnerContext } from "../../context/RunnerContext";
import { AbsolvedRun } from "./AbsolvedRun";
import { Pagination } from "./Pagination";

interface Props {}

export const AbsolvedRuns: FunctionComponent<Props> = () => {
  const { runs, setRuns } = useContext(RunnerContext);
  const [startIndex, setStartIndex] = useState<number>();
  const [endIndex, setEndIndex] = useState<number>();

  const deleteCallback = (runId: string) => {
    setRuns(runs.filter((run) => run.runId != runId));
  };

  return (
    <>
      <Pagination
        n={runs.length}
        setOuterStartIndex={setStartIndex}
        setOuterEndIndex={setEndIndex}
      />

      {runs.slice(startIndex, endIndex).map((run) => (
        <AbsolvedRun
          key={run.runId}
          run={run}
          deleteCallback={deleteCallback}
        />
      ))}
    </>
  );
};
