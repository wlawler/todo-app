import { Component } from '@angular/core';

@Component({
    selector: 'app-yougotserved',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    title: "I am the server compent";
    serverId: number = 10;
    serverstatus: string ='Offline';
}