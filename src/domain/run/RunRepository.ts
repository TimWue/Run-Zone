export interface RunRepository {
  getTrackNumbers: (runnerName: string) => Promise<number[]>;
}
