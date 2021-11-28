import { FunctionComponent, useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { RunnerContext } from "../../../context/RunnerContext";
import { RenderRuns } from "./RenderRuns";
import { RenderPosition } from "./RenderPosition";
import ShowRunControl from "./ShowRunControl";
import styled from "styled-components";
import { Styles } from "../../shared/Styles";

interface Props {}

export const Map: FunctionComponent<Props> = ({}: Props) => {
  const { runs } = useContext(RunnerContext);
  const [showRuns, setShowRuns] = useState(false);

  return (
    <RunMap
      className="basicMap"
      center={[0, 0]}
      zoom={20}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />
      {showRuns && <RenderRuns runs={runs} />}
      <RenderPosition />
      <ShowRunControl setShowRuns={setShowRuns} />
    </RunMap>
  );
};

const RunMap = styled(MapContainer)`
  width: 100%;
  height: 75%;
`;
