import { InMemoryGameTitlesDataSource } from "./datasources/games/impl/InMemoryGameTitlesDataSource";
import { InMemoryGamesDataSource } from "./datasources/games/impl/InMemoryGamesDataSource";
import { InMermoryPlayersDataSource } from "./datasources/games/impl/InMermoryPlayersDataSource";
import { demo } from "./demo";
import { GameTitlesRepo } from "./repositories/GameTitlesRepo";
import { GamesRepo } from "./repositories/GamesRepo";
import { PlayersRepo } from "./repositories/PlayersRepo";

// Manual Dependency Injection

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

// Inversify

// import { Container } from "inversify";

// const container = new Container();
// container
//   .bind<GameDataSource>(TYPES.GamesDataSource)
//   .to(InMemoryGamesDataSource)
//   .inSingletonScope();
// container
//   .bind<GameTitlesDataSource>(TYPES.GameTitlesDataSource)
//   .to(InMemoryGameTitlesDataSource)
//   .inSingletonScope();
// container
//   .bind<PlayersDataSource>(TYPES.PlayersDataSource)
//   .to(InMermoryPlayersDataSource)
//   .inSingletonScope();
// container.bind<GamesRepo>(TYPES.GamesRepo).to(GamesRepo).inSingletonScope();
// container
//   .bind<GameTitlesRepo>(TYPES.GameTitlesRepo)
//   .to(GameTitlesRepo)
//   .inSingletonScope();
// container
//   .bind<PlayersRepo>(TYPES.PlayersRepo)
//   .to(PlayersRepo)
//   .inSingletonScope();

// demo(
//   container.get(TYPES.GamesRepo),
//   container.get(TYPES.GameTitlesRepo),
//   container.get(TYPES.PlayersRepo)
// );

// export { container };

// tsyringe

// import { Lifecycle, container } from "tsyringe";

// container.register<GameDataSource>(
//   TYPES.GamesDataSource,
//   {
//     useClass: InMemoryGamesDataSource,
//   },
//   { lifecycle: Lifecycle.Singleton }
// );
// container.register<GameTitlesDataSource>(
//   TYPES.GameTitlesDataSource,
//   {
//     useClass: InMemoryGameTitlesDataSource,
//   },
//   { lifecycle: Lifecycle.Singleton }
// );
// container.register<PlayersDataSource>(
//   TYPES.PlayersDataSource,
//   {
//     useClass: InMermoryPlayersDataSource,
//   },
//   { lifecycle: Lifecycle.Singleton }
// );
// container.register<GamesRepo>(
//   TYPES.GamesRepo,
//   { useClass: GamesRepo },
//   { lifecycle: Lifecycle.Singleton }
// );
// container.register<GameTitlesRepo>(
//   TYPES.GameTitlesRepo,
//   {
//     useClass: GameTitlesRepo,
//   },
//   { lifecycle: Lifecycle.Singleton }
// );
// container.register<PlayersRepo>(
//   TYPES.PlayersRepo,
//   { useClass: PlayersRepo },
//   { lifecycle: Lifecycle.Singleton }
// );

// demo(
//   container.resolve(TYPES.GamesRepo),
//   container.resolve(TYPES.GameTitlesRepo),
//   container.resolve(TYPES.PlayersRepo)
// );

import { Lifetime, asClass, createContainer } from "awilix";

const container = createContainer();

const t0 = performance.now();
for (let index = 0; index < 1000; index++) {
  container.register({
    gameDataSource: asClass(InMemoryGamesDataSource, {
      lifetime: Lifetime.SINGLETON,
    }),
    gamesRepo: asClass(GamesRepo, { lifetime: Lifetime.SINGLETON }),
    gameTitlesDataSource: asClass(InMemoryGameTitlesDataSource, {
      lifetime: Lifetime.SINGLETON,
    }),
    gameTitlesRepo: asClass(GameTitlesRepo, { lifetime: Lifetime.SINGLETON }),
    playersDataSource: asClass(InMermoryPlayersDataSource, {
      lifetime: Lifetime.SINGLETON,
    }),
    playersRepo: asClass(PlayersRepo, { lifetime: Lifetime.SINGLETON }),
  });
}
const t1 = performance.now();
console.log("register:", Math.ceil(t1 - t0), "milliseconds");

const t2 = performance.now();
for (let index = 0; index < 1500; index++) {
  container.resolve("gamesRepo");
  container.resolve("gameTitlesDataSource");
}
const t3 = performance.now();
console.log("resolve:", Math.ceil(t3 - t2), "milliseconds");

demo(
  container.resolve("gamesRepo"),
  container.resolve("gameTitlesRepo"),
  container.resolve("playersRepo")
);

export { container };
