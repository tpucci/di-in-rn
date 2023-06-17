import { PlayersDataSource } from "../datasources/games/PlayersDataSource";
import { Player } from "../domain/Player";
import { GamesRepo } from "./GamesRepo";

export class PlayersRepo {
  constructor({
    playersDataSource,
    gamesRepo,
  }: {
    playersDataSource: PlayersDataSource;
    gamesRepo: GamesRepo;
  }) {
    this.dataSource = playersDataSource;
    this.gamesRepo = gamesRepo;
  }

  private dataSource: PlayersDataSource;
  private gamesRepo: GamesRepo;

  public getWinnedGames(player: Player): number {
    const games = this.gamesRepo.getGames();
    const winnedGames = games.filter((game) => {
      const scores = game.scores;
      const playerScore = scores.find((score) => score.player === player);
      const otherScores = scores.filter((score) => score.player !== player);
      const otherScoresMax = Math.max(
        ...otherScores.map((score) => score.value)
      );
      return playerScore.value > otherScoresMax;
    });
    return winnedGames.length;
  }

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
