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
import TodoModel from './todo.model';


@Component({
    selector: 'cmp-todo-input',
    template: `
        <input #input (change)="onTextChange(input.value)" type="text" value="{{currText}}"/>
    `
})
export default class TodoInputComponent {
    @ViewChild('input') viewOfInputCmp: ElementRef; 
    public newTodo: TodoModel;
    currText: string;

    constructor(
        public viewOfThis: ViewContainerRef,
        private svcDynCmpFactory: DynamicComponentFactory
    ){}

    onTextChange(newText: string) {
        console.log(newText);
        this.currText = newText;
        console.log(this.currText)
        this.newTodo = new TodoModel(newText, false);
    }
}