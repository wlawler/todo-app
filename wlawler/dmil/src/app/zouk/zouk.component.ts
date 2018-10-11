import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zouk',
  templateUrl: './zouk.component.html',
  styleUrls: ['./zouk.component.css']
})

export class ZoukComponent implements OnInit {

  testingAngularButtonZouk= false;

  zoukStatus:string="Not Learned";

  getZoukStatus (){
    return this.zoukStatus;
  }
  constructor(){
setTimeout(() => {
  this.testingAngularButtonZouk =true;
}, 5000)
  }

  ngOnInit()
  {}
}
