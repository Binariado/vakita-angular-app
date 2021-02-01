import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router'
import { Vaki } from '../../utils/vaki';

@Component({
  selector: 'vaki-challenge-vaki-card',
  templateUrl: './vaki-card.component.html',
  styleUrls: ['./vaki-card.component.scss']
})
export class VakiCardComponent implements OnInit {
  @Input() vaki: Vaki;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toPatch (patch) {
    this.router.navigate([patch.url])
  }

}
