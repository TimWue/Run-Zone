import { FunctionComponent, useContext, useEffect, useState } from "react";
import { Marker, useMap } from "react-leaflet";
import { LatLng } from "leaflet";
import { RunnerContext } from "../../../context/RunnerContext";

interface Props {}

export const RenderPosition: FunctionComponent<Props> = () => {
  const { runnerPosition, setRunnerPosition } = useContext(RunnerContext);
  const map = useMap();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (geoPosition) {
      setRunnerPosition(
        new LatLng(geoPosition.coords.latitude, geoPosition.coords.longitude)
      );
    });
  }, []);

  useEffect(() => {
    runnerPosition && map.setView(runnerPosition);
  }, [runnerPosition]);

  return <>{runnerPosition && <Marker position={runnerPosition} />}</>;
};
