import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[ `
  h1{
    color: purple;
  }`]
})
export class AppComponent {
  title = 'Im in the app';
}
