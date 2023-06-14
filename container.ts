import { GameTitlesDataSource } from "./datasources/games/GameTitlesDataSource";
import { GameDataSource } from "./datasources/games/GamesDataSource";
import { PlayersDataSource } from "./datasources/games/PlayersDataSource";
import { InMemoryGameTitlesDataSource } from "./datasources/games/impl/InMemoryGameTitlesDataSource";
import { InMemoryGamesDataSource } from "./datasources/games/impl/InMemoryGamesDataSource";
import { InMermoryPlayersDataSource } from "./datasources/games/impl/InMermoryPlayersDataSource";
import { GameTitlesRepo } from "./repositories/GameTitlesRepo";
import { GamesRepo } from "./repositories/GamesRepo";
import { PlayersRepo } from "./repositories/PlayersRepo";

const gameDataSource: GameDataSource = new InMemoryGamesDataSource();
const gamesRepo = new GamesRepo(gameDataSource);
const gameTitlesDataSource: GameTitlesDataSource =
  new InMemoryGameTitlesDataSource();
const gameTitlesRepo = new GameTitlesRepo(gameTitlesDataSource);
const playersDataSource: PlayersDataSource = new InMermoryPlayersDataSource();
const playersRepo = new PlayersRepo(playersDataSource);

export const container = {
  gameDataSource,
  gamesRepo,
  gameTitlesDataSource,
  gameTitlesRepo,
  playersDataSource,
  playersRepo,
};
