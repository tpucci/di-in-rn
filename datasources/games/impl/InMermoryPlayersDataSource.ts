import "reflect-metadata";
import { injectable } from "tsyringe";
import { Player } from "../../../domain/Player";
import { PlayersDataSource } from "../PlayersDataSource";

@injectable()
export class InMermoryPlayersDataSource implements PlayersDataSource {
  players = {};

  update(player) {
    this.players[player.id] = player;
    return player;
  }

  create(player) {
    this.players[player.id] = player;
    return player;
  }

  findById(id) {
    return this.players[id];
  }

  destroyById(id) {
    delete this.players[id];
  }

  findAll(): Player[] {
    return Object.values(this.players);
  }
}
