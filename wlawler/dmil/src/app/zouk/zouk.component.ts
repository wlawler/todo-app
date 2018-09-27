import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zouk',
  templateUrl: './zouk.component.html',
  styleUrls: ['./zouk.component.css']
})
export class ZoukComponent implements OnInit {

  zoukMoveStatus:string = 'Not Learned';
  constructor() { }

  ngOnInit() {
  }

}
