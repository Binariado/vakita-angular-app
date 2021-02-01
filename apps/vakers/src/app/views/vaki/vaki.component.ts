import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vaki } from '../../utils/vaki';

@Component({
  selector: 'vaki-challenge-vaki',
  templateUrl: './vaki.component.html',
  styleUrls: ['./vaki.component.scss']
})
export class VakiComponent implements OnInit {
  vaki: Vaki;

  constructor(private route: ActivatedRoute) {
    this.vaki = {
      $key: 'dsd',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
      start_date: 1612136220051,
      close_date: 1612136220051,
      name: 'Salva a salome',
      goal: 20005343,
      summary: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
      url: 'salome',
      photo: '/assets/shiba2.jpg',
      video: '/assets/shiba2.jpg',
      country: 'CO',

    };
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.vaki)
  }

}
