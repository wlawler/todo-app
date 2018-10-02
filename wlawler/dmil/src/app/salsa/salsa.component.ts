import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salsa',
  templateUrl: './salsa.component.html',
  styleUrls: ['./salsa.component.css']
})
export class SalsaComponent implements OnInit {
     
  testingAngularButton= false;

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

}
