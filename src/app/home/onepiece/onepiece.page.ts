import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onepiece',
  templateUrl: './onepiece.page.html',
  styleUrls: ['./onepiece.page.scss'],
})
export class OnepiecePage implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  showScreenSize() {
    console.log(screen.width);
  }
}
