import {Component, NgModule, Compiler, Type, ViewChildren} from '@angular/core';
import { ViewChild } from '@angular/core';
import TodoListComponent from './todo-list.component';
import { QueryList } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { ComponentFactory } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app.module';
import { ComponentFactoryResolver } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { Key } from 'ts-keycode-enum';
import TodoListItemComponent from './todo-list-item.component';
import DynamicComponentFactory from './dynamic-component.factory';
import TodoInputComponent from './todo-input.component';
import TodoModel from './todo.model';

@Component({
    selector: 'cmp-app',
    template: `
        <cmp-todo-input (keyup)="onKeyUp($event)"></cmp-todo-input>
        <button (click)="addTodo()">Add</button>
        <br>
        <cmp-todo-list>
        </cmp-todo-list>
    `,
})
export class AppComponent {
    @ViewChild(TodoListComponent) cmpOfTodoList: TodoListComponent;
    @ViewChild('list2') cmpOfTodoList2: TodoListComponent;
    @ViewChild(TodoInputComponent) cmpOfTodoInput: TodoInputComponent;

    constructor(
        private compiler: Compiler,
        private viewOfAppCmp: ViewContainerRef,
        private svcDynCmpFactory: DynamicComponentFactory
    ) {}

    async addTodo() {
        let newTodoListItem = this.cmpOfTodoInput.newTodo;
        this.cmpOfTodoList.currTodo = newTodoListItem;
        this.cmpOfTodoList.liDynTodos.push(newTodoListItem);
        this.cmpOfTodoList.numTodos++;
        newTodoListItem.id = this.cmpOfTodoList.numTodos;
        newTodoListItem.what = this.cmpOfTodoInput.newTodo.what;
    }

    async onKeyUp(event: KeyboardEvent) {
        if(event.which === Key.Enter) {
            console.log("enter");
            this.addTodo();
        }
    }
}