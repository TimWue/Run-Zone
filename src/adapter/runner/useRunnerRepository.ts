import { RunnerRepository } from "../../domain/runner/RunnerRepository";

const getTrack = (baseUrl: string, runnerName: string): Promise<number[]> => {
  return Promise.resolve([1, 2, 3]);
};

export const useRunnerRepository = (baseUrl: string): RunnerRepository => {
  return {
    getTracks(runnerName: string): Promise<number[]> {
      return getTrack(baseUrl, runnerName);
    },
  };
};
