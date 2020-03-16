import { ShortListedCandidates } from "./short-listed-candidates.model";

export class Jobs {
  Id: number;
  Company: string;
  Title: string;
  DatePosted: string;
  Status: string;
  ShortListed: ShortListedCandidates[] = [];
}
