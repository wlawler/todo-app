import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heyvern',
  templateUrl:'./heyvern.component.html',
 // template: '<app-yougotserved></app-yougotserved><app-yougotserved></app-yougotserved>',
  styleUrls: ['./heyvern.component.css']
})
export class HeyvernComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 5000);
   }

  ngOnInit() {
  }
onCreateServer() {
  this.serverCreationStatus = 'Server was created!';
}
onUpdateServerName(event: Event) {
 this.serverName = (<HTMLInputElement>event.target).value;
}
}
