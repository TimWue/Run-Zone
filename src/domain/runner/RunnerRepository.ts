export interface RunnerRepository {
  getTracks: (runnerName: string) => Promise<number[]>;
}
