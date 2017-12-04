import { Component, ViewRef, Injectable, Output } from '@angular/core'
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

@Component({
    selector: `cmp-todo-list`,
    host: {
    },
    template: `
        Total TODOs: {{numTodos}}
        <ul #todoContainer>
            <cmp-todo-item 
            *ngFor="let todo of liDynTodos" 
            (modelDragStart)="onDrag($event)"
            (modelDragEnd)="onDragEnd($event)" 
            [model]="todo" 
            [parent]="this"></cmp-todo-item>
        </ul>
    `
})
export default class TodoListComponent {
    @ViewChildren(TodoListItemComponent) public todoListItems: QueryList<TodoListItemComponent>;
    @ViewChild(TemplateRef) public tmplOfThis: TemplateRef<TodoListItemComponent>;

    numTodos = 0;
    liDynTodos = new Array<TodoModel>();
    currTodo: TodoModel;
    modelDragged: TodoModel;

    onDragEnd(modelDragged: TodoModel) {
        this.modelDragged = modelDragged;
    }
    onDrag(modelDragged: TodoModel) {
        this.modelDragged = modelDragged;
    }
    addTodo(newTodo: TodoModel) {
        this.currTodo = newTodo;
        if (this.liDynTodos.indexOf(newTodo) === -1)
            this.liDynTodos.push(newTodo);
    }
    removeTodo(whichOne: TodoModel) {
        let tdModelIdx = this.liDynTodos.findIndex(todo => todo.id === whichOne.id);
        console.log(this.liDynTodos.splice(tdModelIdx, 1));
    }

    getComponentForTodo(whichOne: TodoModel) {
       if (this.liDynTodos.find(todo => todo.id === whichOne.id))
       {
          let tdLiCmp = this.todoListItems.find(tdLstItemCmp => tdLstItemCmp.model.id === whichOne.id);
          return tdLiCmp;
       }
    }
    constructor(public viewOfThis: ViewContainerRef){}
}