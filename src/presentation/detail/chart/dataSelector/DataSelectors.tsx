import React, { FunctionComponent, useMemo, useState } from "react";

import styled from "styled-components";
import { ChartData } from "../ChartData";
import { DataSelector } from "./DataSelector";

interface Props {
  dataOptions: ChartData[];
  setDataLeft: (chartData: ChartData) => void;
  setDataRight: (chartData: ChartData) => void;
}

export const DataSelectors: FunctionComponent<Props> = ({
  dataOptions,
  setDataLeft,
  setDataRight,
}) => {
  return (
    <DataChoosers>
      <DataSelector
        dataOptions={dataOptions}
        setData={setDataLeft}
        title={"Links"}
      />
      <DataSelector
        dataOptions={dataOptions}
        setData={setDataRight}
        title={"Rechts"}
      />
    </DataChoosers>
  );
};
const DataChoosers = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
