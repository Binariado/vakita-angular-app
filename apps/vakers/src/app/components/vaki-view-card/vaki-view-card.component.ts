import { Component, OnInit, Input } from '@angular/core';
import { Vaki } from '../../utils/vaki';

interface Coin {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'vaki-challenge-vaki-view-card',
  templateUrl: './vaki-view-card.component.html',
  styleUrls: ['./vaki-view-card.component.scss']
})
export class VakiViewCardComponent implements OnInit {
  @Input() vaki: Vaki;

  coins: Coin[] = [
    { value: 'USD', viewValue: 'USD' },
    { value: 'EUR', viewValue: 'EUR' },
    { value: 'COP', viewValue: 'COP' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
