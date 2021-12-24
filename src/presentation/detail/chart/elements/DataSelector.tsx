import React, { FunctionComponent, useMemo, useState } from "react";

import styled from "styled-components";
import { Styles } from "../../../shared/Styles";
import { ChartData } from "../ChartData";

interface Props {
  dataOptions: ChartData[];
  setData: (chartData: ChartData) => void;
  title: string;
  backgroundColor: string;
}

export const DataSelector: FunctionComponent<Props> = ({
  dataOptions,
  setData,
  title,
  backgroundColor,
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
      <Title backgroundColor={backgroundColor}>{title}</Title>
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
interface TitleProps {
  backgroundColor: string;
}
const DataChooser = styled.div``;

const Title = styled.div<TitleProps>`
  color: black;
  font-size: ${Styles.FONT_SIZE_NORMAL};
  background-color: ${(props) => props.backgroundColor};
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
`;
const DataOptions = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
const DataOption = styled.li`
  cursor: pointer;
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 5px;
`;
