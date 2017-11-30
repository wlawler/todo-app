import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ComponentRef } from '@angular/core';
import DynamicComponentFactory from './dynamic-component.factory';
import TodoListItemComponent from './todo-list-item.component';


@Component({
    selector: 'cmp-todo-input',
    template: `
        <input #newTodo type="text"/>
    `
})
export default class TodoInputComponent implements AfterViewInit {
    @ViewChild('newTodo') viewOfInputCmp: ElementRef; 
    constructor(
        public viewOfThis: ViewContainerRef,
        private svcDynCmpFactory: DynamicComponentFactory
    ){}
    async ngAfterViewInit() {
    }
}