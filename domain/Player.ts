import { v4 as uuidv4 } from "uuid";

export interface Player {
  id: string;
  name: string;
}

export const player = (name: string): Player => ({
  id: uuidv4(),
  name,
});
