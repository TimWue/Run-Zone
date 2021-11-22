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
        <DetailButton>Details</DetailButton>
      </InfoContainer>
    </OuterContainer>
  );
};

const DetailButton = styled.button`
  max-width: 150px;
  background-color: ${Styles.BACKGROUND_COLOR_SECOND};
  color: #282c34;
  border: none;
  border-radius: 5px;
  box-shadow: 5px 5px 10px #282c34;
  &:active {
    box-shadow: 0 0;
  }
`;

const ValueIconContainer = styled.div`
  color: white;
  font-size: ${Styles.FONT_SIZE_NORMAL};
  font-family: ${Styles.FONT_FAMILY_MAIN};
  display: inline-flex;
  margin: 5px;
`;

const ValueContainer = styled.div`
  margin-left: 10px;
`;

const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 5px 5px 5px #282c34;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const InfoContainer = styled.div`
  width: 50%;
  padding-left: 5px;
  display: flex;
  flex-direction: column;
`;

const AbsolvedRunMap = styled(MapContainer)`
  width: 150px;
  height: 150px;
  border-radius: 8px;
  border: none;
  margin: 5px;
`;
