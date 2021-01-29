import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vaki-challenge-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  message = 'Hola Mundo!';

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit(this.message)
  }

}
