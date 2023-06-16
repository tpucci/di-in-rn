import { GameTitlesDataSource } from "../datasources/games/GameTitlesDataSource";

export class GameTitlesRepo {
  constructor({
    gameTitlesDataSource,
  }: {
    gameTitlesDataSource: GameTitlesDataSource;
  }) {
    this.dataSource = gameTitlesDataSource;
  }

  private dataSource: GameTitlesDataSource;

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
