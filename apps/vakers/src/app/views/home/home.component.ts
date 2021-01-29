import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vaki-challenge-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  message:string;

  constructor() { }

  ngOnInit(): void {
  }


  receiveMessage($event) {
    this.message = $event
  }
}
