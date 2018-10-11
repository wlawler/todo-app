import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bachata',
  templateUrl: './bachata.component.html',
  styleUrls: ['./bachata.component.css']
})
export class BachataComponent implements OnInit {
  testingAngularButtonBachata = false;
  moveStatus: string = 'Not Learned';
  getMoveStatus() {
    return this.moveStatus;
  }
  constructor() {
    setTimeout (() => {
      this.testingAngularButtonBachata = true;
    }, 6000)
    }
   

  ngOnInit() {
  }

}
  