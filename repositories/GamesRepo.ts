import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { GameDataSource } from "../datasources/games/GamesDataSource";
import { Game } from "../domain/Game";
import TYPES from "../types";

@injectable()
export class GamesRepo {
  constructor(
    @inject(TYPES.GamesDataSource) private dataSource: GameDataSource
  ) {}

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
