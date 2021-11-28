import React, { FunctionComponent } from "react";
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

export const Detail: FunctionComponent = () => {
  const { runId } = useParams<string>();
  return <div>Detail of {runId}</div>;
};
