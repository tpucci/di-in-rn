import { Game } from "../../domain/Game";

export interface GameDataSource {
  useGames(): Game[];
  create(game: Game): Game;
  findAll(): Game[];
}
