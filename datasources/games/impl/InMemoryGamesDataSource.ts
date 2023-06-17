import { useEffect, useState } from "react";
import { Game } from "../../../domain/Game";
import { GameDataSource } from "../GamesDataSource";

export class InMemoryGamesDataSource implements GameDataSource {
  private games: Record<Game["id"], Game> = {};

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
    const [data, setData] = useState(this.findAll());
    useEffect(() => {
      const callback = () => setData(this.findAll());
      this.subscribe(callback);
      return () => this.unsubscribe(callback);
    }, []);
    return data;
  }

  update(game: Game): Game {
    this.games[game.id] = game;
    this.notifySubscribers();
    return game;
  }
  create(game: Game): Game {
    this.games[game.id] = game;
    this.notifySubscribers();
    return game;
  }
  findById(id: number): Game {
    return this.games[id];
  }
  destroyById(id: number) {
    delete this.games[id];
    this.notifySubscribers();
  }
  findAll(): Game[] {
    return Object.values(this.games);
  }
}
