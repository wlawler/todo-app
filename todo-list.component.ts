import { Component } from '@angular/core'
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


@Component({
    selector: `cmp-todo-list`,
    template: `
        Total TODOs: {{numTodos}}
    `
})
export default class TodoListComponent {
    @ViewChildren(TodoListItemComponent) cmpOfTodos: QueryList<TodoListItemComponent>;
    @ViewChild(TemplateRef) template: TemplateRef<TodoListComponent>;
    numTodos = 0;

    getTodoX(whichOne: TodoListItemComponent) {
        return this.cmpOfTodos.find((todoX) => todoX.id === whichOne.id);
    }   
}