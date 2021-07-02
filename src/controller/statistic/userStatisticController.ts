import {MapService} from "../../domain/map/MapService";

export interface StatisticController {
  getTotalAreaOfRuns: (runnerName: string) => number;
}

export const useStatisticController = (
  mapService: MapService
): StatisticController => {
  return {
    getTotalAreaOfRuns(runnerName: string): number {
      return 0;
    },
  };
};
