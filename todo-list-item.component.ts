import { Component, Input, Inject, Output } from '@angular/core'
import { AppComponent } from './app.component';
import { ViewChild } from '@angular/core';
import { TemplateRef } from '@angular/core';
import TodoModel from './todo.model';
import TodoListComponent from './todo-list.component';
import { Injector } from './injector';
import { EventEmitter } from '@angular/core';


@Component({
    selector: 'cmp-todo-item',
    template: `
        <li draggable="true" 
            [ngStyle]="{ 'background-color': 'transparent' }"
            (dragstart)="onDrag(modelDragged)" 
            (dragend)="onDrop(modelDragged)">
            {{model.id}}:{{model.what}}:{{model.done}}
            <input #completed (click)="onChecked()" type="checkbox"/>
        </li>
    `
})
export default class TodoListItemComponent {
    private modelDragged: TodoModel | undefined;
    @Input() public parent: TodoListComponent;
    @Input() model: TodoModel;
    @Output() modelDragStart: EventEmitter<TodoModel> = new EventEmitter();
    @Output() modelDragEnd: EventEmitter<TodoModel> = new EventEmitter();

    constructor() {}

    async onDrag(tdLiCmp: TodoModel) {
        console.log("drag");
        this.modelDragged = this.parent.liDynTodos.find(todo => todo.id === this.model.id);
        this.modelDragStart.emit(this.modelDragged);
    }

    async onDrop(tdLiCmp: TodoModel) {
        this.modelDragEnd.emit(tdLiCmp);
    }

    onChecked() {
        this.model.done = !this.model.done;
    }
}