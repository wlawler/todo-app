import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salsa',
  templateUrl: './salsa.component.html',
  styleUrls: ['./salsa.component.css']
})
export class SalsaComponent implements OnInit {
     
  testingAngularButton= false;

  songoftheWeek='No Song, you need to click the button';

  salsaStatus:string="Not Learned";

  getSalsaStatus(){
    return this.salsaStatus;
  }
  constructor() {
    setTimeout(() => {
      this.testingAngularButton = true;
    }, 5000)
   }

  ngOnInit() {
  }

  onsongoftheWeek(){
    this.songoftheWeek = 'Ricky Campanelli - Mi Rumbon';
  }
}
