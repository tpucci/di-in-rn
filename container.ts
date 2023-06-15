import { GameTitlesDataSource } from "./datasources/games/GameTitlesDataSource";
import { GameDataSource } from "./datasources/games/GamesDataSource";
import { PlayersDataSource } from "./datasources/games/PlayersDataSource";
import { InMemoryGameTitlesDataSource } from "./datasources/games/impl/InMemoryGameTitlesDataSource";
import { InMemoryGamesDataSource } from "./datasources/games/impl/InMemoryGamesDataSource";
import { InMermoryPlayersDataSource } from "./datasources/games/impl/InMermoryPlayersDataSource";
import { demo } from "./demo";
import { GameTitlesRepo } from "./repositories/GameTitlesRepo";
import { GamesRepo } from "./repositories/GamesRepo";
import { PlayersRepo } from "./repositories/PlayersRepo";

// const gameDataSource: GameDataSource = new InMemoryGamesDataSource();
// const gamesRepo = new GamesRepo(gameDataSource);
// const gameTitlesDataSource: GameTitlesDataSource =
//   new InMemoryGameTitlesDataSource();
// const gameTitlesRepo = new GameTitlesRepo(gameTitlesDataSource);
// const playersDataSource: PlayersDataSource = new InMermoryPlayersDataSource();
// const playersRepo = new PlayersRepo(playersDataSource);

// demo(gamesRepo, gameTitlesRepo, playersRepo);

// export const container = {
//   gameDataSource,
//   gamesRepo,
//   gameTitlesDataSource,
//   gameTitlesRepo,
//   playersDataSource,
//   playersRepo,
// };

import { Container } from "inversify";
import TYPES from "./types";

const container = new Container();
container
  .bind<GameDataSource>(TYPES.GamesDataSource)
  .to(InMemoryGamesDataSource)
  .inSingletonScope();
container
  .bind<GameTitlesDataSource>(TYPES.GameTitlesDataSource)
  .to(InMemoryGameTitlesDataSource)
  .inSingletonScope();
container
  .bind<PlayersDataSource>(TYPES.PlayersDataSource)
  .to(InMermoryPlayersDataSource)
  .inSingletonScope();
container.bind<GamesRepo>(TYPES.GamesRepo).to(GamesRepo).inSingletonScope();
container
  .bind<GameTitlesRepo>(TYPES.GameTitlesRepo)
  .to(GameTitlesRepo)
  .inSingletonScope();
container
  .bind<PlayersRepo>(TYPES.PlayersRepo)
  .to(PlayersRepo)
  .inSingletonScope();

demo(
  container.get(TYPES.GamesRepo),
  container.get(TYPES.GameTitlesRepo),
  container.get(TYPES.PlayersRepo)
);

export { container };
