import { RunnerRepository } from "./RunnerRepository";
import { RunRepository } from "../run/RunRepository";
import { Run } from "../run/Run";

export interface RunnerService {
  getRuns: (runnerName: string) => Promise<Run[]>;
}

export const createRunnerService = (
  runnerRepository: RunnerRepository,
  runRepository: RunRepository
): RunnerService => {
  return {
    async getRuns(runnerName: string): Promise<Run[]> {
      const runs: Run[] = [];
      const runIds = await runnerRepository.getTracks(runnerName);
      await Promise.all(
        runIds.map(async (runId) => {
          runs.push(await runRepository.getRun(runId));
        })
      );
      return runs;
    },
  };
};
