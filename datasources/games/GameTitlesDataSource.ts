import { GameTitle } from "../../domain/GameTitle";

export interface GameTitlesDataSource {
  update(gameTitle: GameTitle): GameTitle;
  create(gameTitle: GameTitle): GameTitle;
  findById(id: number): GameTitle;
  destroyById(id: number);
  findAll(): GameTitle[];
}
