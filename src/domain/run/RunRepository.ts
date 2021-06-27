import { Run } from "./Run";

export interface RunRepository {
  getRun: (runId: number) => Promise<Run>;
}
