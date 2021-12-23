import React, { FunctionComponent, useMemo, useState } from "react";

import styled from "styled-components";
import { Styles } from "../../../shared/Styles";
import { ChartData } from "../ChartData";

interface Props {
  dataOptions: ChartData[];
  setData: (chartData: ChartData) => void;
  title: string;
}

export const DataSelector: FunctionComponent<Props> = ({
  dataOptions,
  setData,
  title,
}) => {
  const [showOptions, setShowOption] = useState(false);

  const findOption = (value: string): ChartData => {
    const selectedOption = dataOptions.filter(
      (option) => option.displayName === value
    )[0];
    if (!selectedOption) throw new Error("No suitable Option found");
    return selectedOption;
  };

  const handleOptionClick = (e: any) => {
    const selectedOption = findOption(e.target.textContent);
    setData(selectedOption);
    setShowOption(!showOptions);
  };

  return (
    <DataChooser onClick={() => setShowOption(!showOptions)}>
      <Title>{title}</Title>
      {showOptions && (
        <DataOptions>
          {dataOptions.map((option, index) => (
            <DataOption key={index} onClick={handleOptionClick}>
              {option.displayName}
            </DataOption>
          ))}
        </DataOptions>
      )}
    </DataChooser>
  );
};

const DataChooser = styled.div``;
const Title = styled.div`
  color: black;
  font-size: ${Styles.FONT_SIZE_NORMAL};
  background-color: ${Styles.BACKGROUND_COLOR_SECOND};
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
`;
const DataOptions = styled.ul`
  list-style-type: none;
`;
const DataOption = styled.li`
  cursor: pointer;
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 5px;
`;
