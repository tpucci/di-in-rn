import { Game } from "../../domain/Game";

export interface GameDataSource {
  useGames(): Game[];
  update(game: Game): Game;
  create(game: Game): Game;
  findById(id: number): Game;
  destroyById(id: number);
  findAll(): Game[];
}
