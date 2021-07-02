import { FunctionComponent, useContext, useEffect, useState } from "react";
import { MapContainer, Polygon, TileLayer } from "react-leaflet";
import { RunnerRunsController } from "../../../controller/runnerRuns/useRunnerRunsController";
import { Run } from "../../../domain/run/Run";
import {} from "leaflet";
import { RunnerContext } from "../../../context/RunnerContext";
import { createMapService } from "../../../domain/map/MapService";

interface Props {
  runnersRunController: RunnerRunsController;
}
export const MapMask: FunctionComponent<Props> = ({
  runnersRunController,
}: Props) => {
  const mapService = createMapService();
  const { runner, runs, setRuns } = useContext(RunnerContext);
  useEffect(() => {
    runnersRunController
      .getRunsOfRunner(runner.runnerName)
      .then((runsReceived) => {
        setRuns(runsReceived);
      });
  }, [runner]);

  const purpleOptions = { color: "red" };

  return (
    <div>
      <MapContainer
        className="basicMap"
        center={[55, 10]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {runs.map((run, index) => {
          return (
            <Polygon
              pathOptions={purpleOptions}
              positions={mapService.track2Polygon(run.track.trackPoints)}
            />
          );
        })}
      </MapContainer>
    </div>
  );
};
