import { RunnerRepository } from "../../domain/runner/RunnerRepository";
import { runners } from "../../resources/Runners";

const getTrack = (baseUrl: string, runnerName: string): Promise<number[]> => {
  let runIds: number[] = [];
  for (let index in runners) {
    if (runners[index].runnerName === runnerName) {
      runIds = runners[index].runnerRunIds;
    }
  }
  return Promise.resolve(runIds);
};

export const useRunnerRepository = (baseUrl: string): RunnerRepository => {
  return {
    getTracks(runnerName: string): Promise<number[]> {
      return getTrack(baseUrl, runnerName);
    },
  };
};
