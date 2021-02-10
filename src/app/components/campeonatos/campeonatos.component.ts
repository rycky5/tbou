import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campeonatos',
  templateUrl: './campeonatos.component.html',
  styleUrls: ['./campeonatos.component.scss']
})
export class CampeonatosComponent implements OnInit {

  public cards = {
    lol: {
      ImagePath: 'assets/lol_logo.jpg',
      Description: 'League of Legends',
    },
    csgo: {
      ImagePath: 'assets/csgo_logo.jpg',
      Description: 'Counter Strike Global Offensive',
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
