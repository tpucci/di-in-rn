import { GameDataSource } from "../datasources/games/GamesDataSource";
import { Game } from "../domain/Game";

export class GamesRepo {
  constructor({ gameDataSource }: { gameDataSource: GameDataSource }) {
    this.dataSource = gameDataSource;
  }

  private dataSource: GameDataSource;

  public getGames(): Game[] {
    const games = this.dataSource.findAll();
    return games;
  }

  public getGame(id: number): Game {
    const game = this.dataSource.findById(id);
    return game;
  }

  public createGame(game: Game): Game {
    const newGame = this.dataSource.create(game);
    return newGame;
  }

  public updateGame(game: Game): Game {
    const updatedGame = this.dataSource.update(game);
    return updatedGame;
  }

  public deleteGame(id: number): void {
    this.dataSource.destroyById(id);
  }
}
