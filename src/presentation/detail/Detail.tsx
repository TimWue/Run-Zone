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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faRoute,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { SwipeOverlay } from "../util/SwipeOverlay";
import { useParams } from "react-router";
import { createRunRepository } from "../../domain/run/RunRepository";
import {
  CartesianGrid,
  Line,
  LineChart,
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
  return (
    <>
      {/*<Details>Start:{new Date(run.startTime).toDateString()}</Details>
      <Details>End:{new Date(run.endTime).toDateString()}</Details>*/}
      <ResponsiveContainer width="90%" height="30%">
        <LineChart data={run.track.distances}>
          <XAxis
            dataKey="time"
            tickLine={false}
            tickCount={5}
            tickFormatter={(tick, index) => {
              return new Date(tick - run?.startTime)
                .toISOString()
                .substring(0, 10);
            }}
          />
          <YAxis
            interval={"preserveStartEnd"}
            domain={["dataMin", "dataMax"]}
          />
          <Tooltip />
          <CartesianGrid stroke="#666 " vertical={false} />
          <Line
            type="monotone"
            dataKey="distance"
            stroke="#ff7300"
            yAxisId={0}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

const Details = styled.div`
  color: white;
`;
