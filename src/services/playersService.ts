import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Events } from 'ionic-angular';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import { PlayerList } from '../models/playerList';

@Injectable()
export class PlayersService {
  defaultRequestOptions: RequestOptions;

  constructor(
    private events: Events,
    private http: Http,
  ) {
    const headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
  }

  getPlayers(): Observable<PlayerList> {
    return this.http.get('http://localhost:8080/players')
    .map((response) => response.json());
  }

}