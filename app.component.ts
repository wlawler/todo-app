import {Component, NgModule, Compiler, Type} from '@angular/core';
import { ViewChild } from '@angular/core';
import TodoListComponent from './todo-list.component';
import { QueryList } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { ComponentFactory } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app.module';
import { ComponentFactoryResolver } from '@angular/core';
import { TemplateRef } from '@angular/core';
import TodoListItemComponent from './todo-list-item.component';
import DynamicComponentFactory from './dynamic-component.factory';

@Component({
    selector: 'cmp-app',
    template: `
        <cmp-todo-input></cmp-todo-input>
        <button (click)="addTodo()">Add</button>
        <cmp-todo-list></cmp-todo-list>
    `
})
export class AppComponent {
    @ViewChild(TodoListComponent, {read: ViewContainerRef}) viewOfAppCmp: ViewContainerRef;
    @ViewChild(TodoListComponent) cmpOfTodoList: TodoListComponent;

    constructor(
        private compiler: Compiler,
        private svcDynCmpFactory: DynamicComponentFactory
    ) {}
    async addTodo() {
        let cmpFactTodo = await this.svcDynCmpFactory.createComponent(TodoListItemComponent);
        let newTodoListItem = this.viewOfAppCmp.createComponent(cmpFactTodo);
        this.cmpOfTodoList.numTodos++;
        newTodoListItem.instance.id = this.cmpOfTodoList.numTodos;
    }
}