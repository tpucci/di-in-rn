import { GameDataSource } from "../datasources/games/GamesDataSource";
import { Game } from "../domain/Game";

export class GamesRepo {
  constructor({ gameDataSource }: { gameDataSource: GameDataSource }) {
    this.dataSource = gameDataSource;
  }

  private dataSource: GameDataSource;

  public useGames(): Game[] {
    return this.dataSource.useGames();
  }

  public getGames(): Game[] {
    const games = this.dataSource.findAll();
    return games;
  }

  public createGame(game: Game): Game {
    const newGame = this.dataSource.create(game);
    return newGame;
  }
}
