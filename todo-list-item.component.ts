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
            (dragstart)="onDrag(modelDragged)" 
            (dragend)="onDrop(modelDragged)"
        >
            <div 
                (mousedown)="toggleEditField()"
                (mouseup)="focusEditField()"
            >
                {{model.id}}:
                {{!editing? model.what: ''}}
            <!--    <input 
                    *ngIf="editing" #editField 
                    (keyup)="onEditCompleted($event, editField.value)" 
                    value={{model.what}}
                />:-->
                {{model.done}}
            <input #completed (click)="onChecked()" type="checkbox"/>
            </div>
        </li>
    `
})
export default class TodoListItemComponent {
    private modelDragged: TodoModel | undefined;
    @Input() public parent: TodoListComponent;
    @Input() model: TodoModel;
    @Output() modelDragStart: EventEmitter<TodoModel> = new EventEmitter();
    @Output() modelDragEnd: EventEmitter<TodoModel> = new EventEmitter();
    @ViewChild('editField') cmpOfEditField: ElementRef;
    editing = false;

    constructor(
        private svcDuplicateStatusCheck: DuplicateCheckService
    ) {}

    async onEditCompleted(event: KeyboardEvent, currValue: string) {
        if(event.which === Key.Enter) {
            console.log("enter");
            this.editing = false;
//            if (this.svcDuplicateStatusCheck.checkForDuplicates(this.parent, this.model.what))
                this.model.what = currValue;
        }
    }
    async focusEditField () {
        if (this.editing) {
            console.log(this.cmpOfEditField);
            this.cmpOfEditField.nativeElement.focus();
        }
    }
    async toggleEditField() {
        this.editing = !this.editing;
    }
    async handleEdit(currValue: string) {
    }
    async onDrag(tdLiCmp: TodoModel) {
        console.log("drag");
        this.modelDragged = this.parent.liDynTodos.find(todo => todo.id === this.model.id);
        this.modelDragStart.emit(this.modelDragged);
    }

    async onDrop(tdLiCmp: TodoModel) {
        this.modelDragEnd.emit(tdLiCmp);
    }

    onChecked() {
        this.model.done = !this.model.done;
    }
}