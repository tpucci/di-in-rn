import { game } from "./domain/Game";
import { gameTitle } from "./domain/GameTitle";
import { player } from "./domain/Player";
import { score } from "./domain/Score";
import { GameTitlesRepo } from "./repositories/GameTitlesRepo";
import { GamesRepo } from "./repositories/GamesRepo";
import { PlayersRepo } from "./repositories/PlayersRepo";

export const demo = (
  gamesRepo: GamesRepo,
  gameTitlesRepo: GameTitlesRepo,
  playersRepo: PlayersRepo
) => {
  const gameTitle1 = gameTitle("Terraforming Mars");
  const gameTitle2 = gameTitle("Catan");
  const gameTitle3 = gameTitle("7 Wonders");
  gameTitlesRepo.create(gameTitle1);
  gameTitlesRepo.create(gameTitle2);
  gameTitlesRepo.create(gameTitle3);

  const player1 = player("Thomas");
  const player2 = player("Marion");
  playersRepo.createPlayer(player1);
  playersRepo.createPlayer(player2);

  const game1 = game(gameTitle1, [score(player1, 54), score(player2, 80)]);
  gamesRepo.createGame(game1);
  const game2 = game(gameTitle2, [score(player1, 12), score(player2, 7)]);
  gamesRepo.createGame(game2);
};
