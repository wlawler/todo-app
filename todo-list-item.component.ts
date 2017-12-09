import { Component, Input, Inject, Output } from '@angular/core'
import { AppComponent } from './app.component';
import { ViewChild } from '@angular/core';
import { TemplateRef } from '@angular/core';
import TodoModel from './todo.model';
import TodoListComponent from './todo-list.component';
import { Injector } from './injector';
import { EventEmitter } from '@angular/core';
import { Key } from 'ts-keycode-enum';
import { ElementRef } from '@angular/core';
import { Renderer } from '@angular/core';
import DuplicateCheckService from './duplicate-check.service';


@Component({
    selector: 'cmp-todo-item',
    template: `
        <li draggable="true" 
            [ngStyle]="{ 
                'background-color': 'transparent', 
                'listStyleType': 'none' 
            }"
            (dragstart)="onDragStart(model)" 
            (dragend)="onDragEnd(model)"
        >
            <div 
                (mousedown)="toggleEditField($event)"
                (mouseup)="focusEditField()"
            >
                {{model.id}}:
                {{!editing? model.what: ''}}
                <input 
                    *ngIf="editing" #editField 
                    (keyup)="onEditCompleted($event, editField.value)" 
                    value={{model.what}}
                />:
                {{model.done}}
            <input #completed (click)="onChecked()" type="checkbox"/>
            </div>
        </li>
    `
})
export default class TodoListItemComponent {
    @Input() public parent: TodoListComponent;
    @Input() model: TodoModel;
    @ViewChild('editField') cmpOfEditField: ElementRef;
    editing = false;
    dragging = false;

    constructor(
        private svcDuplicateStatusCheck: DuplicateCheckService
    ) {}

    async onEditCompleted(event: KeyboardEvent, newTodoText: string) {
        if(event.which === Key.Enter) {
            console.log("enter");
            this.editing = false;
            let prevText = this.model.what;
            this.model.what = newTodoText;
            console.log(this.model.what);
            let dupStatus = this.svcDuplicateStatusCheck.checkForDuplicates(this.parent, this.model);

            if (!dupStatus.error)
                this.model.what = newTodoText;
            else this.model.what = prevText;
        }
    }
    async focusEditField () {
        if (this.editing) {
            console.log(this.cmpOfEditField);
            this.cmpOfEditField.nativeElement.focus();
        }
    }
    async toggleEditField() {
        if (!this.dragging)
            this.editing = !this.editing;
    }
    async onDragStart(tdLiCmp: TodoModel) {
        console.log("Drag Start");
        this.dragging = true;
        this.parent.currTodo = this.model;
    }

    async onDragEnd(tdLiCmp: TodoModel) {
        this.dragging = false;
    }

    onChecked() {
        this.model.done = !this.model.done;
    }
}