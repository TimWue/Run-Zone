import * as React from "react";
import { useContext } from "react";
import { RunnerContext } from "../../context/RunnerContext";
import { CurrentRunControls } from "../controls/CurrentRunControls";

type Props = {};
export const Header = (props: Props) => {
  const { runner } = useContext(RunnerContext);
  return (
    <>
      <h2
        style={{
          color: "#eee",
          fontFamily: "Open Sans Condensed, sans-serif",
          fontSize: "48px",
          fontWeight: "bold",
          lineHeight: "48px",
          padding: "0 5px",
          textAlign: "center",
          textTransform: "uppercase",
          minWidth: "200px",
        }}
      >
        Moin {runner.runnerName}
      </h2>
      <CurrentRunControls />
    </>
  );
};
