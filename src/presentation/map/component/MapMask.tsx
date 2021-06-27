import { FunctionComponent, useEffect, useState } from "react";
import { MapContainer, Polygon, TileLayer } from "react-leaflet";
import { RunnerRunsController } from "../../../controller/runnerRuns/useRunnerRunsController";
import { Run } from "../../../domain/run/Run";
import { runners } from "../../../resources/Runners";
import { TrackPoint } from "../../../domain/run/TrackPoint";
import { latLng, LatLngTuple } from "leaflet";

interface Props {
  runnersRunController: RunnerRunsController;
}
export const MapMask: FunctionComponent<Props> = ({
  runnersRunController,
}: Props) => {
  const [runs, setRuns] = useState<Run[]>([]);
  const [runner, setRunner] = useState<string>("Tim");
  useEffect(() => {
    runnersRunController.getRunsOfRunner(runner).then((runsReceived) => {
      setRuns(runsReceived);
    });
  }, [runner]);

  //TODO: As Hook + Coordinates not right
  const track2tuple = (trackpoints: TrackPoint[]) => {
    const tuple = [];
    for (let index in trackpoints) {
      const ll: LatLngTuple = [
        trackpoints[index].latitude,
        trackpoints[index].longitude,
      ];
      tuple.push(ll);
    }
    return tuple;
  };

  const purpleOptions = { color: "red" };

  return (
    <div>
      <div>
        {runs.map((run) => {
          return <div key={run.runId}>{run.runId} </div>;
        })}
      </div>
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
              positions={track2tuple(run.track.trackPoints)}
            />
          );
        })}
      </MapContainer>
    </div>
  );
};
