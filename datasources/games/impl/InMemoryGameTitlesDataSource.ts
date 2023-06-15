import "reflect-metadata";
import { injectable } from "tsyringe";
import { GameTitle } from "../../../domain/GameTitle";
import { GameTitlesDataSource } from "../GameTitlesDataSource";

@injectable()
export class InMemoryGameTitlesDataSource implements GameTitlesDataSource {
  gameTitles = {};

  update(gameTitle) {
    this.gameTitles[gameTitle.id] = gameTitle;
    return gameTitle;
  }

  create(gameTitle) {
    this.gameTitles[gameTitle.id] = gameTitle;
    return gameTitle;
  }

  findById(id) {
    return this.gameTitles[id];
  }

  destroyById(id) {
    delete this.gameTitles[id];
  }

  findAll(): GameTitle[] {
    return Object.values(this.gameTitles);
  }
}
