import { Player } from "./Player";

export interface Score {
  player: Player;
  value: number;
}

export const score = (player: Player, value: number): Score => ({
  player,
  value,
});
