import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bachata',
  templateUrl: './bachata.component.html',
  styleUrls: ['./bachata.component.css']
})
export class BachataComponent implements OnInit {
moveStatus: string = 'Not Learned';
  constructor() { }

  ngOnInit() {
  }

}
