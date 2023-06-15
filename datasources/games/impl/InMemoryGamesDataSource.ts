import { injectable } from "inversify";
import "reflect-metadata";
import { Game } from "../../../domain/Game";
import { GameDataSource } from "../GamesDataSource";

@injectable()
export class InMemoryGamesDataSource implements GameDataSource {
  private games: Record<Game["id"], Game> = {};

  update(game: Game): Game {
    this.games[game.id] = game;
    return game;
  }
  create(game: Game): Game {
    this.games[game.id] = game;
    return game;
  }
  findById(id: number): Game {
    return this.games[id];
  }
  destroyById(id: number) {
    delete this.games[id];
  }
  findAll(): Game[] {
    return Object.values(this.games);
  }
}
