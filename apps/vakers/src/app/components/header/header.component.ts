import { Component, OnInit, Input } from '@angular/core';

type Props ={
  toggle?: any
}

@Component({
  selector: 'vaki-challenge-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() drawer: Props;

  constructor() { }

  ngOnInit() {
    console.log('init headerComponent')
  }

  eventDrawer () {
    this.drawer.toggle()
  }
}
