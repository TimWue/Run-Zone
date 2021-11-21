import React, { FunctionComponent, useState } from "react";
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
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  run: Run;
}

export const AbsolvedRun: FunctionComponent<Props> = ({ run }) => {
  const centerFromRun = (run: Run): LatLng => {
    const startPoint = run.track.trackPoints[0];
    return new LatLng(startPoint.latitude, startPoint.longitude);
  };

  const mapService = createMapService();

  return (
    <OuterContainer>
      <AbsolvedRunMap
        className="basicMap"
        center={centerFromRun(run)}
        zoom={20}
        dragging={false}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Polyline positions={mapService.track2Polygon(run.track.trackPoints)} />
      </AbsolvedRunMap>
      <InfoContainer>
        <ValueIconContainer>
          <FontAwesomeIcon icon={faCalendar} />
          <ValueContainer>
            {new Date(run.startTime).toDateString()}
          </ValueContainer>
        </ValueIconContainer>
        <ValueIconContainer>
          <FontAwesomeIcon icon={faClock} />
          <ValueContainer>
            {new Date(run.endTime - run.startTime).toISOString().substr(11, 8)}
          </ValueContainer>
        </ValueIconContainer>
        <ValueIconContainer>
          <FontAwesomeIcon icon={faRoute} />
          <ValueContainer>10.2 km</ValueContainer>
        </ValueIconContainer>
      </InfoContainer>
    </OuterContainer>
  );
};

const ValueIconContainer = styled.div`
  color: white;
  font-size: 20px;
  font-family: ${Styles.FONT_FAMILY_MAIN};
  display: inline-flex;
  margin: 5px;
`;

const ValueContainer = styled.div`
  margin-left: 20px;
`;

const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  box-shadow: 5px 5px 5px #282c34;
  border-radius: 5px;
`;

const InfoContainer = styled.div`
  width: 60%;
  padding: 5px;
  display: flex;
  flex-direction: column;
`;

const AbsolvedRunMap = styled(MapContainer)`
  width: 30%;
  min-width: 200px;
  height: 150px;
  border-radius: 8px;
  border: none;
  margin: 5px;
`;
