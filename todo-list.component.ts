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


@Component({
    selector: `cmp-todo-list`,
    template: `
        <div *ngTemplateOutlet="template">
            <cmp-todo></cmp-todo>
        </div> 
    `
})
export default class TodoListComponent {
    @ViewChildren(TodoListItemComponent) cmpTodos: QueryList<TodoListItemComponent>;
    @ViewChild(TemplateRef) template: TemplateRef<TodoListComponent>;
}