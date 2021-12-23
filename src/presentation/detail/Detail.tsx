import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
} from "react";
import { MapContainer, Polyline, TileLayer } from "react-leaflet";
import { Run } from "../../domain/run/Run";
import { createMapService } from "../../domain/map/MapService";
import { LatLng } from "leaflet";
import styled from "styled-components";
import { Styles } from "../shared/Styles";

import { useParams } from "react-router";
import { createRunRepository } from "../../domain/run/RunRepository";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const Detail: FunctionComponent = () => {
  const { runId } = useParams<string>();
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
        .slice(11, 19),
      distance: accumulate(run.track.distances.map((value) => value.distance))[
        i
      ],
      velocity: run.track.trackPoints[i].speed?.toFixed(1),
    });
  }

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
            <linearGradient id="colorVelocity" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff8c00" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ff8c00" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="time"
            stroke="#fff"
            tickCount={2}
            tick={{ fontSize: Styles.FONT_SIZE_NORMAL }}
            dy={10}
          />
          <YAxis
            from={0}
            yAxisId="left"
            type="number"
            dataKey="distance"
            name="distance"
            unit="km"
            orientation="left"
            stroke={Styles.BACKGROUND_COLOR_SECOND}
            dx={-5}
          />
          <YAxis
            from={0}
            yAxisId="right"
            type="number"
            dataKey="velocity"
            name="velocity"
            unit="km/h"
            orientation="right"
            stroke="#ff8c00"
            dx={5}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              opacity: 0.5,
              maxHeight: "fit-content",
            }}
          />
          <CartesianGrid stroke="#666" vertical={false} strokeDasharray="3 3" />
          <Area
            type="monotone"
            dataKey="distance"
            stroke={Styles.BACKGROUND_COLOR_SECOND}
            fillOpacity={1}
            fill="url(#colorDistance)"
            yAxisId={"left"}
          />
          <Area
            type="monotone"
            dataKey="velocity"
            stroke="#ff8c00"
            fillOpacity={1}
            fill="url(#colorVelocity)"
            yAxisId={"right"}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  );
};

const Details = styled.div`
  color: white;
`;

const Heading = styled.h1`
  color: white;
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
