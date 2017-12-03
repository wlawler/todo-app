import { Component, Input, Inject } from '@angular/core'
import { AppComponent } from './app.component';
import { ViewChild } from '@angular/core';
import { TemplateRef } from '@angular/core';
import TodoModel from './todo.model';


@Component({
    selector: 'cmp-todo-item',
    template: `
        <li>
            {{model.id}}:{{model.what}}:{{model.done}}
            <input #completed (click)="onChecked()" type="checkbox" />
        </li>
    `
})
export default class TodoListItemComponent {
    private static idCounter = 1;
    @ViewChild(TemplateRef) public tmplOfThis: TemplateRef<TodoListItemComponent>;
    @Input() model: TodoModel;
    @Input() id = TodoListItemComponent.idCounter;
    @Input() what = '';
    @ViewChild('checked') checked: HTMLInputElement;
    @Input() done = false;


    constructor() { TodoListItemComponent.idCounter++; }

    onChecked() {
        this.model.done = !this.model.done;
    }
}