import { Component, ViewRef } from '@angular/core'
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

@Component({
    selector: `cmp-todo-list`,
    template: `
        Total TODOs: {{numTodos}}
        <ul>
            <cmp-todo-item *ngFor="let todo of liDynTodos" [model]="todo" [what]="todo?.what"></cmp-todo-item>
        </ul>
    `
})
export default class TodoListComponent {
    @ViewChildren(TodoListItemComponent) public todoListItems: QueryList<TodoListItemComponent>;
    @ViewChild(TemplateRef) public tmplOfThis: TemplateRef<TodoListItemComponent>;

    private m_currTodo = new TodoModel(0, '', false);
    public get currTodo () {
        let srchRes = this.todoListItems.find((todo) => { console.log(this.numTodos); return todo.id === this.numTodos } );
        if (srchRes) return srchRes;
        else return this.m_currTodo;
    }
    public set currTodo (to: TodoModel) {
        this.m_currTodo = to;
    }

    numTodos = 0;
    liDynTodos = new Array<TodoModel>();
    embdViewOfThis: EmbeddedViewRef<TodoListItemComponent>;

    constructor(public viewOfThis: ViewContainerRef){}
}