import { Polygon } from "react-leaflet";
import { FunctionComponent } from "react";
import { Run } from "../../../domain/run/Run";
import { createMapService } from "../../../domain/map/MapService";

interface Props {
  runs: Run[];
}

export const RenderRuns: FunctionComponent<Props> = ({ runs }: Props) => {
  const mapService = createMapService();
  const purpleOptions = { color: "red" };

  return (
    <>
      {runs.map((run, index) => {
        return (
          <Polygon
            pathOptions={purpleOptions}
            positions={mapService.track2Polygon(run.track.trackPoints)}
          />
        );
      })}
    </>
  );
};
