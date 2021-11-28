import React, { FunctionComponent } from "react";
import { Map } from "../map/component/Map";
import { CurrentRunControls } from "../controls/CurrentRunControls";
import { Dashboard } from "../dashboard/Dashboard";
import styled from "styled-components";
import { Styles } from "../shared/Styles";

interface Props {}

export const StartRun: FunctionComponent<Props> = () => {
  return (
    <>
      <Dashboard />
      <Map />
      <CurrentRunControls />
    </>
  );
};
