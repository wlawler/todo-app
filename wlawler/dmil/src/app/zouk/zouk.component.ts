import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zouk',
  templateUrl: './zouk.component.html',
  styleUrls: ['./zouk.component.css']
})

export class ZoukComponent implements OnInit {

  testingAngularButtonZouk= false;

  zoukStatus:string="Not Learned";

  zoukSongoftheWeek="No song yet, click the button";

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
  onZoukSongoftheWeek(){
    this.zoukSongoftheWeek="DJ KahKah - Side to P.I.M.P";
  }
}
