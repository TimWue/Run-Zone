import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { Map } from "../map/wiredComponent/Map";
import { CurrentRunControls } from "../controls/CurrentRunControls";
import { Dashboard } from "../dashboard/Dashboard";
import { MapContainer, Polyline, TileLayer, useMap } from "react-leaflet";
import { RenderRuns } from "../map/component/RenderRuns";
import { RenderPosition } from "../map/component/RenderPosition";
import ShowRunControl from "../map/component/ShowRunControl";
import { Button } from "react-bootstrap";
import { RunnerContext } from "../../context/RunnerContext";
import { Run } from "../../domain/run/Run";
import { createRunRepository } from "../../domain/run/RunRepository";
import { createMapService } from "../../domain/map/MapService";
import { LatLng } from "leaflet";
import { ViewChanger } from "./ViewChanger";
import styled from "styled-components";
import { AbsolvedRun } from "./AbsolvedRun";

interface Props {}

export const AbsolvedRuns: FunctionComponent<Props> = () => {
  const { runs } = useContext(RunnerContext);

  return (
    <>
      {runs.map((run) => (
        <AbsolvedRun run={run} />
      ))}
    </>
  );
};
