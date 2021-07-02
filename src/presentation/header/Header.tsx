import * as React from "react";
import { useContext } from "react";
import { RunnerContext } from "../../context/RunnerContext";

type Props = {};
export const Header = (props: Props) => {
  const { runner } = useContext(RunnerContext);
  return <div>Hello {runner.runnerName}</div>;
};
