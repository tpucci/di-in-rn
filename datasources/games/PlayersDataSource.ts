import { Player } from "../../domain/Player";

export interface PlayersDataSource {
  update(player: Player): Player;
  create(player: Player): Player;
  findById(id: number): Player;
  destroyById(id: number);
  findAll(): Player[];
}
