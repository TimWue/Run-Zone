import { FunctionComponent } from "react";

import { createRunnerService } from "../../../domain/runner/RunnerService";
import { MapMask } from "../component/MapMask";
import { useRunnerRunsController } from "../../../controller/runnerRuns/useRunnerRunsController";
import { createRunnerRepository } from "../../../domain/runner/RunnerRepository";
import { createRunRepository } from "../../../domain/run/RunRepository";

type Props = {};

export const Map: FunctionComponent<Props> = (props: Props) => {
  const runnerRepository = createRunnerRepository();
  const runRepository = createRunRepository();
  const runnerService = createRunnerService(runnerRepository, runRepository);

  const runnersRunController = useRunnerRunsController(runnerService);
  return <MapMask runnersRunController={runnersRunController}></MapMask>;
};
