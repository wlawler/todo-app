import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ComponentRef } from '@angular/core';
import DynamicComponentFactory from './dynamic-component.factory';
import TodoListItemComponent from './todo-list-item.component';
import { TemplateRef } from '@angular/core';
import { AppComponent } from './app.component';


@Component({
    selector: 'cmp-todo-input',
    template: `
        <input #newTodo (change)="onTextChange(newTodo.value)" type="text"/>
    `
})
export default class TodoInputComponent {
    @ViewChild('newTodo') viewOfInputCmp: ElementRef; 
    public newTodo: TodoListItemComponent;

    constructor(
        public viewOfThis: ViewContainerRef,
        private svcDynCmpFactory: DynamicComponentFactory
    ){}

    onTextChange(newText: string) {
        console.log(newText);
        this.newTodo = { id: NaN, what: newText, done: false };
    }
}