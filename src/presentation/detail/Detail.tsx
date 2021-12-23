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
  const trackPoints = run.track.trackPoints;
  const distance = run.track.distances;
  const data: any[] = [];
  for (let i = 0; i < trackPoints.length; i++) {
    data.push({
      time: trackPoints[i].time,
      distance: distance[i].distance,
    });
  }
  console.log(data);
  const formatXAxis = (tickItem: number): string => {
    const timediff = tickItem - startTime;
    return new Date(timediff).toISOString().slice(11, 19);
  };
  return (
    <Container>
      <Heading>{new Date(startTime).toISOString().slice(0, 10)}</Heading>
      <ResponsiveContainer width="90%" height="30%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorDistance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="time" tickFormatter={formatXAxis} />
          <YAxis from={0} />
          <Tooltip />
          <CartesianGrid
            stroke="#666 "
            vertical={false}
            strokeDasharray="3 3"
          />
          <Area
            type="monotone"
            dataKey="distance"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorDistance)"
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
