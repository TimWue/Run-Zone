import { RunnerRepository } from "./RunnerRepository";
import { RunRepository } from "../run/RunRepository";
import { Run } from "../run/Run";
import { Runner } from "./Runner";

export interface RunnerService {
  getRuns: (runnerName: string) => Promise<Run[]>;
  getRunner: (runnerName: string) => Promise<Runner | undefined>;
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
    async getRunner(runnerName: string): Promise<Runner | undefined> {
      let runner = await runnerRepository.getRunner(runnerName);
      return runner;
    },
  };
};
