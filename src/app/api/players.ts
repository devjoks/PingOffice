import { RequestMethod } from '@angular/http';
import { ApiMock } from './index';

export const GET_PLAYERS: ApiMock = {
  url: 'http://localhost:8080/players',
  method: RequestMethod.Get,
  response: {
    status: 200,
    body: {
      players: [
        {
          player_id: 1,
          player_name: 'David González',
          player_nick: 'devjoks',
          elo: 1000,
        },
        {
          player_id: 2,
          player_name: 'Carlos Mora',
          player_nick: 'linkuder',
          elo: 1000,
        },
      ]
    }
  }
};