import { Component, Input, Inject } from '@angular/core'
import { AppComponent } from './app.component';


@Component({
    selector: 'cmp-todo',
    template: `
        <li>{{id}}:{{what}}</li>
    `
})
export default class TodoListItemComponent {
    private static idCounter = 1;
    @Input() public id = TodoListItemComponent.idCounter;
    @Input() public what = '';
    @Input() public done = false;

    constructor() { TodoListItemComponent.idCounter++; }
}