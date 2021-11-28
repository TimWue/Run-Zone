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
      <Details>Start:{new Date(run.startTime).toDateString()}</Details>
      <Details>End:{new Date(run.endTime).toDateString()}</Details>
      <ResponsiveContainer width="100%" height="50%">
        <LineChart
          data={run.track.trackPoints}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line
            type="monotone"
            dataKey="latitude"
            stroke="#ff7300"
            yAxisId={0}
          />
          <Line
            type="monotone"
            dataKey="longitude"
            stroke="#387908"
            yAxisId={1}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

const Details = styled.div`
  color: white;
`;
