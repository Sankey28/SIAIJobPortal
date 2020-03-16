import { Interviews } from "./interviews.model";

export class ShortListedCandidates {
  Id: number;
  Name: string;
  WorksAt: string;
  Experience: string;
  CTC: string;
  Interviews: Interviews[] = [];
}
