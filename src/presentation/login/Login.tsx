import * as React from "react";
import { useContext, useState } from "react";
import { RunnerContext } from "../../context/RunnerContext";
import { createRunnerService } from "../../domain/runner/RunnerService";
import { createRunnerRepository } from "../../domain/runner/RunnerRepository";
import { createRunRepository } from "../../domain/run/RunRepository";

type Props = {};
export const Login = (props: Props) => {
  const [runnerName, setRunnerName] = useState<string>("");
  const runnerRepository = createRunnerRepository();
  const runRepository = createRunRepository();
  const runnerService = createRunnerService(runnerRepository, runRepository);
  const { setRunner } = useContext(RunnerContext);

  const clickHandle = () => {
    console.log("Login " + runnerName);
    runnerService.getRunner(runnerName).then((runner: any) => {
      if (runner) {
        setRunner(runner!);
      }
    });
  };

  return (
    <div>
      <input
        type={"text"}
        onChange={(e) => {
          setRunnerName(e.target.value);
        }}
        value={runnerName}
        placeholder={"Enter your Name:"}
      />
      <button onClick={clickHandle}>Login</button>
    </div>
  );
};
