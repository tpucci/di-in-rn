import { Score } from "./Score";

export interface Game {
  id: string;
  name: string;
  scores: Score[];
}
