import { v4 as uuidv4 } from "uuid";

export interface GameTitle {
  id: string;
  title: string;
}

export const gameTitle = (title: string): GameTitle => ({
  id: uuidv4(),
  title,
});
