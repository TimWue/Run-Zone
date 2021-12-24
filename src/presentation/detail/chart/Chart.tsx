import React, { FunctionComponent, useState } from "react";

import { Styles } from "../../shared/Styles";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ChartData } from "./ChartData";
import { Run } from "../../../domain/run/Run";
import { Gradient } from "./elements/Gradient";
import { DataSelector } from "./elements/DataSelector";
import styled from "styled-components";

interface Props {
  run: Run;
}
export const Chart: FunctionComponent<Props> = ({ run }) => {
  const dataOptions: ChartData[] = [
    ChartData.DISTANCE,
    ChartData.SPEED,
    ChartData.ALTITUDE,
  ];

  const [dataLeft, setDataLeft] = useState(dataOptions[0]);
  const [dataRight, setDataRight] = useState(dataOptions[1]);

  const accumulate = (arr: number[]) => {
    return arr.map(
      (
        (sum: number) => (value: number) =>
          (sum += value)
      )(0)
    );
  };

  const data: any[] = [];
  for (let i = 0; i < run.track.distances.length; i++) {
    data.push({
      time: new Date(run.track.trackPoints[i].time - run.startTime)
        .toISOString()
        .slice(12, 19),
      distance: accumulate(run.track.distances.map((value) => value.distance))[
        i
      ],
      speed: run.track.trackPoints[i].speed?.toFixed(1),
      altitude: run.track.trackPoints[i].altitude?.toFixed(1),
    });
  }

  return (
    <>
      <ResponsiveContainer width="100%" height="30%" minHeight={"200px"}>
        <AreaChart data={data}>
          <defs>
            <Gradient
              id="colorDistance"
              color={Styles.BACKGROUND_COLOR_SECOND}
            />
            <Gradient id="colorSpeed" color={Styles.BACKGROUND_COLOR_THIRD} />
          </defs>
          <XAxis
            dataKey="time"
            stroke="#fff"
            interval={"preserveStartEnd"}
            tick={{ fontSize: Styles.FONT_SIZE_NORMAL }}
            dy={10}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              opacity: 0.5,
              maxHeight: "fit-content",
            }}
          />
          <CartesianGrid stroke="#666" vertical={false} strokeDasharray="3 3" />

          <YAxis
            yAxisId="left"
            type="number"
            dataKey={dataLeft.dataKey}
            name={dataLeft.name}
            orientation="left"
            stroke={Styles.BACKGROUND_COLOR_SECOND}
            dx={-5}
            style={{ fontSize: Styles.FONT_SIZE_SMALL }}
            interval={"preserveStartEnd"}
          />

          <Area
            type="monotone"
            dataKey={dataLeft.dataKey}
            name={dataLeft.name}
            stroke={Styles.BACKGROUND_COLOR_SECOND}
            fillOpacity={1}
            fill="url(#colorDistance)"
            yAxisId={"left"}
          />

          <YAxis
            yAxisId="right"
            type="number"
            dataKey={dataRight.dataKey}
            name={dataRight.name}
            orientation="right"
            stroke="#ff8c00"
            dx={5}
            style={{ fontSize: Styles.FONT_SIZE_SMALL }}
            interval={"preserveStartEnd"}
          />
          <Area
            type="monotone"
            dataKey={dataRight.dataKey}
            name={dataRight.name}
            stroke="#ff8c00"
            fillOpacity={1}
            fill="url(#colorSpeed)"
            yAxisId={"right"}
          />
        </AreaChart>
      </ResponsiveContainer>
      <DataChoosers>
        <DataSelector
          dataOptions={dataOptions}
          setData={setDataLeft}
          title={dataLeft.name}
          backgroundColor={Styles.BACKGROUND_COLOR_SECOND}
        />
        <DataSelector
          dataOptions={dataOptions}
          setData={setDataRight}
          title={dataRight.name}
          backgroundColor={Styles.BACKGROUND_COLOR_THIRD}
        />
      </DataChoosers>
    </>
  );
};

const DataChoosers = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-top: 20px;
`;
