import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { PlayersDataSource } from "../datasources/games/PlayersDataSource";
import { Player } from "../domain/Player";
import TYPES from "../types";

@injectable()
export class PlayersRepo {
  constructor(
    @inject(TYPES.PlayersDataSource) private dataSource: PlayersDataSource
  ) {}

  public getPlayers(): Player[] {
    const players = this.dataSource.findAll();
    return players;
  }

  public getPlayer(id: number): Player {
    const player = this.dataSource.findById(id);
    return player;
  }

  public createPlayer(player: Player): Player {
    const newPlayer = this.dataSource.create(player);
    return newPlayer;
  }

  public updatePlayer(player: Player): Player {
    const updatedPlayer = this.dataSource.update(player);
    return updatedPlayer;
  }

  public deletePlayer(id: number): void {
    this.dataSource.destroyById(id);
  }
}
