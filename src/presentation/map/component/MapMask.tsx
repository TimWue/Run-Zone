import { FunctionComponent, useState } from "react";
import { MapController } from "../../../controller/map/useMapController";
import { MapContainer, TileLayer } from "react-leaflet";

interface Props {
  mapController: MapController;
}
export const MapMask: FunctionComponent<Props> = ({ mapController }: Props) => {
  const [tracks, setTracks] = useState<number[]>([1]);
  mapController.getTracksOfRunner("Tim").then((trackNumbers: number[]) => {
    setTracks(trackNumbers);
  });
  return (
    <div>
      <div>
        {tracks.map((track) => {
          return <div>{track} </div>;
        })}
      </div>
      <MapContainer
        className="basicMap"
        center={[53.1796, 8.184]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};
