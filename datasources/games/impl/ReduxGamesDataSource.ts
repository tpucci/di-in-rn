import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { Game } from "../../../domain/Game";
import { GameDataSource } from "../GamesDataSource";

export class ReduxGamesDataSource implements GameDataSource {
  private slice = createSlice({
    name: "games",
    initialState: {},
    reducers: {
      update: (state, action) => {
        const game = action.payload;
        state[game.id] = game;
      },
      create: (state, action) => {
        const game = action.payload;
        state[game.id] = game;
      },
      destroyById: (state, action) => {
        const id = action.payload;
        delete state[id];
      },
    },
  });

  private store = configureStore({
    reducer: {
      games: this.slice.reducer,
    },
  });

  public useGames(): Game[] {
    const selector = (state) => Object.values(state.games);
    const [state, setState] = useState(selector(this.store.getState()));
    useEffect(() => {
      const unsubscribe = this.store.subscribe(() => {
        const newState = selector(this.store.getState());
        setState(newState);
      });

      return () => {
        unsubscribe();
      };
    }, [selector]);

    return state as Game[];
  }

  create(game: Game): Game {
    this.store.dispatch(this.slice.actions.create(game));
    return game;
  }

  findAll(): Game[] {
    return Object.values(this.store.getState().games) as Game[];
  }
}
