import { Component } from '@angular/core';
import { PlayersService } from '../../services/playersService';

@Component({
  selector: 'page-players',
  templateUrl: 'players.html'
})
export class PlayersPage {

  constructor(
    private playerService: PlayersService) {
      playerService.getPlayers().subscribe((res) => {
        console.log(res);
      })
  }

}
