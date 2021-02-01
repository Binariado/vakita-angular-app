import { Component, OnInit } from '@angular/core';
import { VakiReward } from '../../../utils/vaki-reward';

@Component({
  selector: 'vaki-challenge-vaki-content-rewards',
  templateUrl: './vaki-content-rewards.component.html',
  styleUrls: ['./vaki-content-rewards.component.scss']
})
export class VakiContentRewardsComponent implements OnInit {
  rewards: VakiReward[] = [];

  constructor() {

    this.rewards = [
      {
        title: 'Balon de oro',
        description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
        visible: true,
        img: '/assets/shiba2.jpg',
        key: '123',
        value: '20000',
        delivery_date: 20,
        claimed: 0,
        quantityAvailable: 3
      },
      {
        title: 'Balon de oro',
        description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
        visible: true,
        img: '/assets/shiba2.jpg',
        key: '123',
        value: '20000',
        delivery_date: 20,
        claimed: 0,
        quantityAvailable: 3
      },
      {
        title: 'Balon de oro',
        description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
        visible: true,
        img: '/assets/shiba2.jpg',
        key: '123',
        value: '20000',
        delivery_date: 20,
        claimed: 0,
        quantityAvailable: 3
      },
      {
        title: 'Balon de oro',
        description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
        visible: true,
        img: '/assets/shiba2.jpg',
        key: '123',
        value: '20000',
        delivery_date: 20,
        claimed: 0,
        quantityAvailable: 3
      },
      {
        title: 'Balon de oro',
        description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
        visible: true,
        img: '/assets/shiba2.jpg',
        key: '123',
        value: '20000',
        delivery_date: 20,
        claimed: 0,
        quantityAvailable: 3
      },
    ]
  }

  ngOnInit(): void {
  }

}
