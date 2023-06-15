import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { GameTitlesDataSource } from "../datasources/games/GameTitlesDataSource";
import TYPES from "../types";

@injectable()
export class GameTitlesRepo {
  constructor(
    @inject(TYPES.GameTitlesDataSource)
    private dataSource: GameTitlesDataSource
  ) {}

  create(gameTitle) {
    return this.dataSource.create(gameTitle);
  }
  update(gameTitle) {
    return this.dataSource.update(gameTitle);
  }
  findById(id) {
    return this.dataSource.findById(id);
  }
  destroyById(id) {
    return this.dataSource.destroyById(id);
  }
  findAll() {
    return this.dataSource.findAll();
  }
}
