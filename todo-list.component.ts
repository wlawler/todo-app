import { Component, ViewRef, Injectable, Output, Input } from '@angular/core'
import { ViewChildren } from '@angular/core'
import { QueryList } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { EmbeddedViewRef } from '@angular/core';
import { SelectorContext } from '@angular/compiler';
import { HostBinding } from '@angular/core';
import { ContentChild } from '@angular/core';
import TodoListItemComponent from './todo-list-item.component';
import { OnInit } from '@angular/core';
import { Query } from '@angular/core';
import { ContentChildren } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { ChangeDetectorRef } from '@angular/core';
import TodoModel from './todo.model';
import { EventEmitter } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
    selector: `cmp-todo-list`,
    host: {
    },
    template: `
        Total TODOs: {{numTodos}}
        <ul #todoContainer>
            <cmp-todo-item 
            *ngFor="let todo of liDynTodos" 
            [model]="todo" 
            [parent]="this"></cmp-todo-item>
        </ul>
    `
})
export default class TodoListComponent {
    @ViewChildren(TodoListItemComponent) public cmpOfTodoListItems: QueryList<TodoListItemComponent>;
    @ViewChild(TemplateRef) public tmplOfThis: TemplateRef<TodoListItemComponent>;
    @Output() beforeTodoModelSet = new EventEmitter<TodoModel>();
    @Input() parent: AppComponent;

    numTodos = 0;
    liDynTodos = new Array<TodoModel>();
    currTodo: TodoModel;

    addTodo(newTodo: TodoModel) {
        this.currTodo = newTodo;
        this.liDynTodos.push(newTodo);
    }
    removeTodo(whichOne: TodoModel) {
        let tdModelIdx = this.liDynTodos.findIndex(todo => todo.id === whichOne.id);
        console.log("Removing todo:", this.liDynTodos.splice(tdModelIdx, 1));
    }
    hasDuplicates(inputTodo: TodoModel) {
        let dupFound = false;
        console.log("Possible duplicates: ");
        this.liDynTodos.forEach((todo) => {
            console.log(todo);
            if (todo.what === inputTodo.what && todo.id !== inputTodo.id) {
                console.log("Duplicate Found: ", todo.what, inputTodo.what);
                dupFound = true;
            }
        })
        return dupFound;
    }
    getComponentForTodo(whichOne: TodoModel) {
       if (this.liDynTodos.find(todo => todo.id === whichOne.id))
       {
          let tdLiCmp = this.cmpOfTodoListItems.find(tdLstItemCmp => tdLstItemCmp.model.id === whichOne.id);
          return tdLiCmp;
       }
    }
    constructor(public viewOfThis: ViewContainerRef){}
}