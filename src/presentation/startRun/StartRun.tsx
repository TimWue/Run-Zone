import React, { FunctionComponent } from "react";
import { Map } from "../map/component/Map";
import { CurrentRunControls } from "../controls/CurrentRunControls";
import { Infoboard } from "../infoboard/Infoboard";
import styled from "styled-components";
import { Styles } from "../shared/Styles";

interface Props {}

export const StartRun: FunctionComponent<Props> = () => {
  return (
    <div className="h-full">
      <Infoboard />
      <Map />
      <CurrentRunControls />
    </div>
  );
};
