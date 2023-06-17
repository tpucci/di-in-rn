import { useEffect, useState } from "react";
import { GameDataSource } from "../datasources/games/GamesDataSource";
import { Game } from "../domain/Game";

export class GamesRepo {
  constructor({ gameDataSource }: { gameDataSource: GameDataSource }) {
    this.dataSource = gameDataSource;
  }

  private dataSource: GameDataSource;

  private subscribers = [];

  private subscribe(callback) {
    this.subscribers.push(callback);
  }

  private unsubscribe(callback) {
    this.subscribers = this.subscribers.filter(
      (subscriber) => subscriber !== callback
    );
  }

  private notifySubscribers() {
    this.subscribers.forEach((callback) => callback());
  }

  public useGames(): Game[] {
    const [data, setData] = useState(this.getGames());
    useEffect(() => {
      const callback = () => setData(this.getGames());
      this.subscribe(callback);
      return () => this.unsubscribe(callback);
    }, []);
    return data;
  }

  public getGames(): Game[] {
    const games = this.dataSource.findAll();
    return games;
  }

  public createGame(game: Game): Game {
    const newGame = this.dataSource.create(game);
    this.notifySubscribers();
    return newGame;
  }
}
