import {Component, NgModule, Compiler, Type} from '@angular/core';
import { ViewChild } from '@angular/core';
import TodoListComponent from './todo-list.component';
import { QueryList } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { ComponentFactory } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app.module';
import { ComponentFactoryResolver } from '@angular/core';
import { TemplateRef } from '@angular/core';
import TodoListItemComponent from './todo-list-item.component';

@Component({
    selector: 'cmp-app',
    template: `
       <cmp-todo-list>
       </cmp-todo-list>
       <button (click)="addTodo()">Add</button>
    `
})
export class AppComponent {
    @ViewChild(TodoListComponent, {read: ViewContainerRef}) viewOfAppCmp: ViewContainerRef;
    @ViewChild(TodoListComponent) cmpOfTodoList: TodoListComponent;

    constructor(
        private compiler: Compiler,
        private cmpFacResolver: ComponentFactoryResolver
    ) {}
    async addTodo() {
        let cmpFactTodo = await this.createComponentFactory(TodoListItemComponent);
        this.viewOfAppCmp.createComponent(cmpFactTodo);
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