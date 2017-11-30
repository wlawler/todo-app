import { Component } from '@angular/core'
import { ViewChildren } from '@angular/core'
import TodoComponent from './todo.component';


@Component({
    selector: `cmp-todo-list`,
    template: `
        <ul>
            <cmp-todo></cmp-todo>
        </ul> 
    `
})
export default class TodoListComponent {
    @ViewChildren(TodoComponent) todos: TodoComponent[];
}