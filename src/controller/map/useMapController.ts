import { useState } from "react";
import { RunnerService } from "../../domain/runner/RunnerService";

export interface MapController {
  getTracksOfRunner: (runnerName: string) => Promise<number[]>;
}

export const useMapController = (
  runnerService: RunnerService
): MapController => {
  const [tracks, setTracks] = useState<number[]>();

  const getTracksOfRunner = (runnerName: string): Promise<number[]> => {
    return runnerService
      .getTracks(runnerName)
      .then((trackNumbers: number[]) => {
        setTracks(trackNumbers);
        return trackNumbers;
      });
  };

  return { getTracksOfRunner };
};
