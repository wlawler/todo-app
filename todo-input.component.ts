import { Component, Input } from '@angular/core';
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
import TodoListComponent from './todo-list.component';
import DuplicateCheckService, { DuplicateStatus } from './duplicate-check.service';


@Component({
    selector: 'cmp-todo-input',
    template: `
        <input [style.borderColor]="duplicateStatus.color" #input (change)="onTextChange(input.value)" type="text" value="{{currText}}"/>
        <div *ngIf="duplicateStatus.error">You entered a duplicate TODO!</div>
    `
})
export default class TodoInputComponent {
    error = false;
    color: string = 'green';
    @ViewChild('input') viewOfInputCmp: ElementRef; 
    @Input() parent: AppComponent;
    public newTodo: TodoModel;
    currText: string;
    newText: string;
    duplicateStatus: DuplicateStatus = { color: 'green', error: false};

    constructor(
        public viewOfThis: ViewContainerRef,
    ){}

    onTextChange(newText: string) {
        console.log("Text Change");
        this.currText = this.newText = newText;
        this.newTodo = new TodoModel(newText, false);
    }
}