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
    styles: [`
        cmp-todo-list {
            float: left
        }
        cmp-todo-list+cmp-todo-list {
            float: right
        } 
    `],
    template: `
        <cmp-todo-input (keyup)="onKeyUp($event)"></cmp-todo-input>
        <button (click)="addTodo(cmpOfTodoList)">Add</button>
        <br>
        <cmp-todo-list #list1 (drop)="onDrop(this.cmpOfTodoList.modelDragged)" (dragover)="onDragOver($event)">
        </cmp-todo-list>
        <cmp-todo-list #list2 (drop)="onDrop(this.cmpOfTodoList.modelDragged)" (dragover)="onDragOver($event)">
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

    async onDrop(modelDragged: TodoModel) {
        console.log("Drop");
//        this.cmpOfTodoList.removeTodo(modelDragged);
        this.addTodo(this.cmpOfTodoList2, modelDragged);    
    }

    async onDragOver(dragEvent: DragEvent) {
        // https://stackoverflow.com/a/21341021/1156933
        // Required to cancel dragover to get the drop event to fire
        dragEvent.preventDefault();
    }
    async addTodo(todoList: TodoListComponent, newTodo: TodoModel) {
        todoList.addTodo(newTodo);
        this.cmpOfTodoInput.currText = '';
    }

    async onKeyUp(event: KeyboardEvent) {
        if(event.which === Key.Enter) {
            console.log("enter");
            this.addTodo(this.cmpOfTodoList, this.cmpOfTodoInput.newTodo);
        }
    }
}