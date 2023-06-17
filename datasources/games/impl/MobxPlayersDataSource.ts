import { makeAutoObservable, toJS } from "mobx";
import { Player } from "../../../domain/Player";
import { PlayersDataSource } from "../PlayersDataSource";

export class MobxPlayersDataSource implements PlayersDataSource {
  constructor() {
    makeAutoObservable(this);
  }

  private players = {};

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
    return Object.values(toJS(this.players));
  }
}
