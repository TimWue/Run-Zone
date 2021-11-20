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

interface Props {}

export const AbsolvedRuns: FunctionComponent<Props> = () => {
  const { runs } = useContext(RunnerContext);
  const [currentRun, setCurrentRun] = useState<Run>();
  const [index, setIndex] = useState(0);
  const [center, setCenter] = useState(new LatLng(0, 0));
  const mapService = createMapService();

  useEffect(() => {
    setCurrentRun(runs[index]);
    const startPoint = runs[index].track.trackPoints[0];
    setCenter(new LatLng(startPoint.latitude, startPoint.longitude));
  }, [index]);

  const clickHandle = (change: number) => {
    setIndex((oldIndex) => {
      let newIndex;
      newIndex =
        oldIndex + change >= runs.length - 1
          ? runs.length - 1
          : oldIndex + change;
      newIndex = newIndex < 0 ? 0 : newIndex;
      return newIndex;
    });
  };

  return (
    <>
      {currentRun && (
        <RunDateTime>
          {new Date(currentRun.startTime).toUTCString()}
        </RunDateTime>
      )}

      <PastRunMap
        className="basicMap"
        center={[0, 0]}
        zoom={20}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <ViewChanger center={center} />
        {currentRun && (
          <Polyline
            positions={mapService.track2Polygon(currentRun.track.trackPoints)}
          />
        )}
      </PastRunMap>

      <div>
        <RunSelectButton
          variant={"dark"}
          disabled={index <= 0}
          onClick={() => clickHandle(-1)}
        >
          Zurück
        </RunSelectButton>

        <RunSelectButton
          variant={"dark"}
          disabled={index >= runs.length - 1}
          onClick={() => clickHandle(1)}
        >
          Vor
        </RunSelectButton>
      </div>
    </>
  );
};

const PastRunMap = styled(MapContainer)`
  width: 100%;
  height: 400px;
  border-radius: 8px;
`;

const RunSelectButton = styled(Button)`
  width: 50%;
`;

const RunDateTime = styled.div`
  color: white;
  text-align: center;
  padding: 2px;
`;
