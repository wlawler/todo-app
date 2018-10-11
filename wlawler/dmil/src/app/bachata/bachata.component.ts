import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bachata',
  templateUrl: './bachata.component.html',
  styleUrls: ['./bachata.component.css']
})
export class BachataComponent implements OnInit {
  testingAngularButtonBachata = false;
  moveStatus: string = 'Not Learned';
  bachataSongoftheWeek = 'No song yet, click the button';
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
onBachatasongoftheWeek(){
  this.bachataSongoftheWeek="Grupo Extra-Me Emborrachare";
}
}
   