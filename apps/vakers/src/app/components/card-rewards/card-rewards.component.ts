import { Component, OnInit, Input } from '@angular/core';
import { VakiReward } from '../../utils/vaki-reward';

@Component({
  selector: 'vaki-challenge-card-rewards',
  templateUrl: './card-rewards.component.html',
  styleUrls: ['./card-rewards.component.scss']
})
export class CardRewardsComponent implements OnInit {
  @Input() reward: VakiReward;

  constructor() { }

  ngOnInit(): void {
  }

}
