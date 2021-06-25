import { RunnerRepository } from "./RunnerRepository";

export interface RunnerService {
  getTracks: (runnerName: string) => Promise<number[]>;
}

export const createRunnerService = (
  runnerRepository: RunnerRepository
): RunnerService => {
  return {
    getTracks(runnerName: string): Promise<number[]> {
      return runnerRepository.getTracks(runnerName);
    },
  };
};
