import { FunctionComponent } from "react";

import { useRunnerRepository } from "../../../adapter/runner/useRunnerRepository";
import { createRunnerService } from "../../../domain/runner/RunnerService";
import { MapMask } from "../component/MapMask";
import { useRunRepository } from "../../../adapter/run/useRunRepository";
import { useRunnerRunsController } from "../../../controller/runnerRuns/useRunnerRunsController";

type Props = {};

export const Map: FunctionComponent<Props> = (props: Props) => {
  const baseUrl = "";
  const runnerRepository = useRunnerRepository(baseUrl);
  const runRepository = useRunRepository(baseUrl);
  const runnerService = createRunnerService(runnerRepository, runRepository);

  const runnersRunController = useRunnerRunsController(runnerService);
  return <MapMask runnersRunController={runnersRunController}></MapMask>;
};
