import { Component, Input, OnInit } from '@angular/core';
import { CardCampeonatoModel } from './card-campeonato.model';

@Component({
  selector: 'app-card-campeonato',
  templateUrl: './card-campeonato.component.html',
  styleUrls: ['./card-campeonato.component.scss']
})
export class CardCampeonatoComponent implements OnInit {
  @Input('CardContent') card: CardCampeonatoModel;

  constructor() { }

  ngOnInit(): void {
  }

}
