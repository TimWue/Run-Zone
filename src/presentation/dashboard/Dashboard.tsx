import * as React from "react";
import { useContext, useEffect, useState } from "react";
import { RunnerContext } from "../../context/RunnerContext";
import { createMapService, MapService } from "../../domain/map/MapService";
import { Run } from "../../domain/run/Run";
import { CurrentRunContext } from "../../context/CurrentRunContext";

type Props = {};
export const Dashboard = (props: Props) => {
  const [totalArea, setTotalArea] = useState<number>(0);
  const { runs } = useContext(RunnerContext);
  const { speed } = useContext(CurrentRunContext);
  const mapService: MapService = createMapService();

  useEffect(() => {
    setTotalArea(
      runs
        .map((run: Run) => {
          return mapService.calcArea(run.track.trackPoints);
        })
        .reduce((sum, current) => {
          return sum + current;
        }, 0)
    );
  }, [runs]);
  return (
    <>
      <div>Area: {totalArea.toFixed(2)} [km^2]</div>
      {speed && <div>Speed: {speed}</div>}
    </>
  );
};
