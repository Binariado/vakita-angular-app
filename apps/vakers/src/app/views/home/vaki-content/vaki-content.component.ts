import { Component, OnInit } from '@angular/core';
import { Vaki } from '../../../utils/vaki';
import { VakisService } from '../../../services/vakis.service';

@Component({
  selector: 'vaki-challenge-vaki-content',
  templateUrl: './vaki-content.component.html',
  styleUrls: ['./vaki-content.component.scss'],
  providers: [
    VakisService
  ],
})
export class VakiContentComponent implements OnInit {
  vakis: Promise<Vaki[]>;

  constructor(private vakisService: VakisService) {
    this.vakis = this.vakisService.getVakis();
  }

  ngOnInit(): void {
    console.log('finalize')
  }

}