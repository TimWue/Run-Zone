import React, { FunctionComponent, useEffect } from "react";
import { useMap } from "react-leaflet";
import { LatLng } from "leaflet";

interface Props {
  center: LatLng;
}

export const ViewChanger: FunctionComponent<Props> = ({ center }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center);
  }, [center]);

  return <></>;
};
