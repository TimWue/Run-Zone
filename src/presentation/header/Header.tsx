import * as React from "react";
import { useContext } from "react";
import { RunnerContext } from "../../context/RunnerContext";
import { CurrentRunControls } from "../controls/CurrentRunControls";

type Props = {};
export const Header = (props: Props) => {
  const { runner } = useContext(RunnerContext);
  return (
    <>
      <div>
        <h3>Moin {runner.runnerName}</h3>
      </div>
      <div>
        <CurrentRunControls />
      </div>
    </>
  );
};
