import { FunctionComponent } from "react";
import {
  MapController,
  useMapController,
} from "../../../controller/map/useMapController";
import { useRunnerRepository } from "../../../adapter/runner/useRunnerRepository";
import { createRunnerService } from "../../../domain/runner/RunnerService";
import { MapMask } from "../component/MapMask";

type Props = {};

export const Map: FunctionComponent<Props> = (props: Props) => {
  const baseUrl = "";
  const runnerRepository = useRunnerRepository(baseUrl);
  const runnerService = createRunnerService(runnerRepository);

  const mapController = useMapController(runnerService);
  return <MapMask mapController={mapController}></MapMask>;
};
