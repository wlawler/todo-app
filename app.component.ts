import {Component} from '@angular/core';
import { ViewChild } from '@angular/core';
import TodoListComponent from './todo-list.component';

@Component({
    selector: 'cmp-app',
    template: `
       <cmp-todo-list>
       </cmp-todo-list>
    `
})
export class AppComponent {
    @ViewChild(TodoListComponent) todoList: TodoListComponent;
}