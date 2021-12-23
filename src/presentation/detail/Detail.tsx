import React, { FunctionComponent, useMemo, useState } from "react";

import styled from "styled-components";
import { Styles } from "../shared/Styles";

import { useParams } from "react-router";
import { createRunRepository } from "../../domain/run/RunRepository";
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

export class ChartData {
  static readonly DISTANCE = new ChartData(
    "distance",
    "distance [km]",
    "Distance"
  );
  static readonly SPEED = new ChartData("speed", "speed [km/h]", "Speed");
  static readonly ALTITUDE = new ChartData(
    "altitude",
    "altitude [m]",
    "Altitude"
  );
  private constructor(
    public readonly dataKey: string,
    public readonly name: string,
    public readonly displayName: string
  ) {}
}

export const Detail: FunctionComponent = () => {
  const { runId } = useParams<string>();
  const dataOptions: ChartData[] = [
    ChartData.DISTANCE,
    ChartData.SPEED,
    ChartData.ALTITUDE,
  ];
  const [showLeftOptions, setShowLeftOption] = useState(false);
  const [showRightOptions, setShowRightOption] = useState(false);
  const [dataLeft, setDataLeft] = useState(dataOptions[0]);
  const [dataRight, setDataRight] = useState(dataOptions[1]);
  const runRepository = createRunRepository();
  const run = useMemo(() => {
    return runRepository.getRun(runId!);
  }, [runId]);
  if (!run) return <div>No run found</div>;
  const startTime = run.startTime;

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

  const findOption = (value: string): ChartData => {
    const selectedOption = dataOptions.filter(
      (option) => option.displayName === value
    )[0];
    if (!selectedOption) throw new Error("No suitable Otion found");
    return selectedOption;
  };

  const handleOptionClickLeft = (e: any) => {
    const selectedOption = findOption(e.target.textContent);
    setDataLeft(selectedOption);
    setShowLeftOption(!showLeftOptions);
  };

  const handleOptionClickRight = (e: any) => {
    const selectedOption = findOption(e.target.textContent);
    setDataRight(selectedOption);
    setShowRightOption(!showRightOptions);
  };

  return (
    <Container>
      <Heading>{new Date(startTime).toISOString().slice(0, 10)}</Heading>
      <ResponsiveContainer width="100%" height="30%" minHeight={"200px"}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorDistance" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={Styles.BACKGROUND_COLOR_SECOND}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={Styles.BACKGROUND_COLOR_SECOND}
                stopOpacity={0}
              />
            </linearGradient>
            <linearGradient id="colorSpeed" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff8c00" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ff8c00" stopOpacity={0} />
            </linearGradient>
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
            from={0}
            yAxisId="left"
            type="number"
            dataKey={dataLeft.dataKey}
            name={dataLeft.name}
            orientation="left"
            stroke={Styles.BACKGROUND_COLOR_SECOND}
            dx={-5}
            style={{ fontSize: Styles.FONT_SIZE_SMALL }}
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
            from={0}
            yAxisId="right"
            type="number"
            dataKey={dataRight.dataKey}
            name={dataRight.name}
            orientation="right"
            stroke="#ff8c00"
            dx={5}
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
          <Legend />
        </AreaChart>
      </ResponsiveContainer>
      <DataChoosers>
        <DataChooser onClick={() => setShowLeftOption(!showLeftOptions)}>
          <Title>Links</Title>
          {showLeftOptions && (
            <DataOptions>
              {dataOptions.map((option) => (
                <DataOption onClick={handleOptionClickLeft}>
                  {option.displayName}
                </DataOption>
              ))}
            </DataOptions>
          )}
        </DataChooser>

        <DataChooser onClick={() => setShowRightOption(!showRightOptions)}>
          <Title>Rechts</Title>
          {showRightOptions && (
            <DataOptions>
              {dataOptions.map((option) => (
                <DataOption onClick={handleOptionClickRight}>
                  {option.displayName}
                </DataOption>
              ))}
            </DataOptions>
          )}
        </DataChooser>
      </DataChoosers>
    </Container>
  );
};
const DataChoosers = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

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

const Heading = styled.h1`
  color: white;
  font-weight: bold;
  font-family: ${Styles.FONT_FAMILY_MAIN};
  font-size: ${Styles.FONT_SIZE_LARGER};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  height: 100%;
  width: 100%;
`;
