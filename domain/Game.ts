import { v4 as uuid } from "uuid";
import { GameTitle } from "./GameTitle";
import { Score } from "./Score";

export interface Game {
  id: string;
  title: GameTitle;
  scores: Score[];
}

export const game = (title: GameTitle, scores: Score[]): Game => ({
  id: uuid(),
  title,
  scores,
});
