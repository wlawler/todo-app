import { Component } from '@angular/core'


@Component({
    selector: 'cmp-todo',
    template: `
        <li>{{name}}</li>
    `
})
export default class TodoListItemComponent {
    name = 'todo';
}