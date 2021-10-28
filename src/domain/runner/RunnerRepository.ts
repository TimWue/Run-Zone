import { runners } from "../../resources/Runners";
import { Runner } from "./Runner";

export interface RunnerRepository {
  getTracks: (runnerName: string) => Promise<number[]>;
  getRunner: (runnerName: string) => Promise<Runner | undefined>;
}

export const createRunnerRepository = (): RunnerRepository => {
  return {
    getTracks(runnerName: string): Promise<number[]> {
      let runIds: number[] = [];
      for (let index in runners) {
        if (runners[index].runnerName === runnerName) {
          runIds = runners[index].runnerRunIds;
        }
      }
      return Promise.resolve(runIds);
    },
    getRunner(runnerName: string): Promise<Runner | undefined> {
      return Promise.resolve(
        runners.find((runner: Runner) => runner.runnerName === runnerName)
      );
    },
  };
};
