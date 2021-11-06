import { FunctionComponent, useContext, useEffect } from "react";
import { Marker, useMap } from "react-leaflet";
import { RunnerContext } from "../../../context/RunnerContext";

interface Props {}

export const RenderPosition: FunctionComponent<Props> = () => {
  const { runnerPosition } = useContext(RunnerContext);
  const map = useMap();

  useEffect(() => {
    runnerPosition && map.setView(runnerPosition);
  }, [runnerPosition]);

  return <>{runnerPosition && <Marker position={runnerPosition} />}</>;
};
