import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Map } from "../map/wiredComponent/Map";
import { CurrentRunControls } from "../controls/CurrentRunControls";
import { Dashboard } from "../dashboard/Dashboard";

interface Props {}

export const StartRun: FunctionComponent<Props> = () => {
  return (
    <>
      <Map />
      <CurrentRunControls />
      <Dashboard />
    </>
  );
};
