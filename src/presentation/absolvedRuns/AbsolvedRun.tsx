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
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  run: Run;
}

export const AbsolvedRun: FunctionComponent<Props> = ({ run }) => {
  const [startPosition, setStartPosition] = useState<number>();
  const [positionDifference, setPositionDifference] = useState<number>(0);
  const [isActive, setIsActive] = useState(false);
  const centerFromRun = (run: Run): LatLng => {
    const startPoint = run.track.trackPoints[0];
    return new LatLng(startPoint.latitude, startPoint.longitude);
  };

  const mapService = createMapService();

  const touchMoveHandle = (e: React.TouchEvent<HTMLDivElement>) => {
    console.log("move", startPosition! - e.targetTouches[0].clientX);
    const moveX = e.targetTouches[0].clientX;
    if (startPosition! - moveX > 50) {
      setIsActive(true);
    }
    //setPositionDifference(startPosition! + e.targetTouches[0].clientX);
  };

  const touchStartHandle = (e: React.TouchEvent<HTMLDivElement>) => {
    console.log("start ", e.targetTouches[0].clientX);
    setStartPosition(e.targetTouches[0].clientX);
    e.preventDefault();
  };

  const touchEndHandle = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("end ", e.changedTouches[0].clientX);
  };

  return (
    <OuterContainer
      onTouchStart={touchStartHandle}
      onTouchMove={touchMoveHandle}
      onTouchEnd={touchEndHandle}
    >
      <Delete isActive={isActive}>
        {" "}
        <FontAwesomeIcon icon={faTrash} />
      </Delete>
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
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 5px 5px 5px #282c34;
  border-radius: 5px;
  margin-bottom: 15px;
  cursor: pointer;
`;

interface DeleteProps {
  isActive: boolean;
}

const Delete = styled.div<DeleteProps>`
  color: white;
  width: 100%;
  height: 100%;
  z-index: 1000;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px;
  visibility: ${({ isActive }: DeleteProps) =>
    isActive ? "visible" : "hidden"};
  background-color: rgba(52, 58, 64, 0.9);
  font-size: ${Styles.FONT_SIZE_LARGER};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoContainer = styled.div`
  width: 50%;
  padding-left: 5px;
  display: flex;
  flex-direction: column;
`;

const AbsolvedRunMap = styled(MapContainer)`
  width: 130px;
  height: 130px;
  border-radius: 8px;
  border: none;
  margin: 5px;
  z-index: 0;
`;
