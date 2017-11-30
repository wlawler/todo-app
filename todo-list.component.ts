import { Component } from '@angular/core'
import { ViewChildren } from '@angular/core'
import TodoComponent from './todo.component';
import { QueryList } from '@angular/core';


@Component({
    selector: `cmp-todo-list`,
    template: `
        <ul>
            <cmp-todo></cmp-todo>
        </ul> 
    `
})
export default class TodoListComponent {
    @ViewChildren(TodoComponent) todos: QueryList<TodoComponent>;
}