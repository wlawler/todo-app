import {Component, NgModule, Compiler, Type, ViewChildren, Query} from '@angular/core';
import { ViewChild } from '@angular/core';
import TodoListComponent from './todo-list.component';
import { QueryList } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { ComponentFactory } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app.module';
import { ComponentFactoryResolver } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { Key } from 'ts-keycode-enum';
import TodoListItemComponent from './todo-list-item.component';
import DynamicComponentFactory from './dynamic-component.factory';
import TodoInputComponent from './todo-input.component';
import TodoModel from './todo.model';
import DuplicateCheckService from './duplicate-check.service';
//This is where we make our tools.//
@Component({
//cmp-app is the reference name given to our new tool//
    selector: 'cmp-app',
   //Below the program is being directed as to where to place the product of our tool on the interface//
    styles: [`
        cmp-todo-list {
            float: left
        }
        cmp-todo-list+cmp-todo-list {
            float: right
        } 
    `],
//Below is there we specify how we want our tool to act. First, we instruct the tool to//
//activate once something that has been pressed is releasd. Then we specify that the//
//thing that we want clicked and released is a button labeled "add"//
//Further when the add button is release, we want was typed in the input box to be added//
//to the list below//

    template: `
        <cmp-todo-input (keyup)="onKeyUp($event)" [parent]="this"></cmp-todo-input>
        <button (click)="addTodo(cmpOfTodoList, this.cmpOfTodoInput.newTodo)">Add</button>
        <br>
        <cmp-todo-list #list1 [parent]="this" (drop)="onDrop(cmpOfTodoList2, cmpOfTodoList)" (dragover)="onDragOver($event)">
        </cmp-todo-list>
        <cmp-todo-list #list2 [parent]="this" (drop)="onDrop(cmpOfTodoList, cmpOfTodoList2)" (dragover)="onDragOver($event)">
        </cmp-todo-list>
    `,
})
export class AppComponent {
    @ViewChild(TodoListComponent) cmpOfTodoList: TodoListComponent;
    @ViewChild('list2') cmpOfTodoList2: TodoListComponent;
    @ViewChildren(TodoListComponent) cmpsOfTodoList: QueryList<TodoListComponent>;
    @ViewChild(TodoInputComponent) cmpOfTodoInput: TodoInputComponent;

    constructor(
        private compiler: Compiler,
        private viewOfAppCmp: ViewContainerRef,
        private svcDuplicateStatusCheck: DuplicateCheckService
    ) {}

    async onDrop(sourceList: TodoListComponent, targetList: TodoListComponent) {
        console.log("Drop");
        console.log(sourceList.currTodo);

        if (sourceList.currTodo) {
            let dupStatus = this.svcDuplicateStatusCheck.checkForDuplicates(targetList, sourceList.currTodo);
            console.log("Drop---Checking for duplicates: ", dupStatus);
            if (!dupStatus.error)
            {
                sourceList.removeTodo(sourceList.currTodo);
                this.addTodo(targetList, sourceList.currTodo);    
            }
        }   
    }

    async onDragOver(dragEvent: DragEvent) {
        // https://stackoverflow.com/a/21341021/1156933
        // Required to cancel dragover to get the drop event to fire
        dragEvent.preventDefault();
    }
    async addTodo(todoList: TodoListComponent, newTodo: TodoModel) {
        //this.cmpOfTodoInput.currText = '';
        let dupStatus = this.svcDuplicateStatusCheck.checkForDuplicates(todoList, newTodo);
        if (!dupStatus.error)
        {
            this.cmpOfTodoInput.currText = '';
            todoList.addTodo(newTodo);
        }
    }

    async onKeyUp(event: KeyboardEvent) {
        if(event.which === Key.Enter) {
            console.log("enter");
            this.addTodo(this.cmpOfTodoList, this.cmpOfTodoInput.newTodo);
        }
    }
}