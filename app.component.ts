import {Component, NgModule, Compiler, Type} from '@angular/core';
import { ViewChild } from '@angular/core';
import TodoListComponent from './todo-list.component';
import TodoComponent from './todo.component';
import { QueryList } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { ComponentFactory } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app.module';

@Component({
    selector: 'cmp-app',
    template: `
       <cmp-todo-list>
       </cmp-todo-list>
       <button (click)="addTodo()">Add</button>
    `
})
export class AppComponent {
    @ViewChild(TodoListComponent) todoList: TodoListComponent;
    @ViewChild(TodoListComponent, {read: ViewContainerRef}) viewContainer: ViewContainerRef;
    
    constructor(private compiler: Compiler) {}

    async addTodo() {
        let cmpFactTodo = await this.createComponentFactory(TodoComponent);
        this.viewContainer.createComponent(cmpFactTodo);
    }

    // Utility methods to create a dynamic component

    private async createComponentFactory<T>(componentType: Type<T>): Promise<ComponentFactory<T>> {
        let moduleWithComponentFactories = await this.compiler.compileModuleAndAllComponentsAsync<AppModule>(AppModule);
        // All factories available in this module are returned instead of just the one we are interested in.
        // We filter the array to just get the factory for this componentType.
        let componentFactory =  moduleWithComponentFactories.componentFactories.find(fact => fact.componentType === componentType); 
        if (componentFactory)
            return componentFactory;
        else throw Error("[ Error ] --- componentFactory is undefined");
    }
  
}