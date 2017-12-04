import { Injector as ngInjector } from '@angular/core';
import { ConstructorProvider, ExistingProvider } from '@angular/core/src/di/provider';
import TodoListComponent from './todo-list.component';

export const injTodoLiCmp: ExistingProvider  = {
    provide: TodoListComponent,
    useExisting: TodoListComponent
};
export const Injector = ngInjector.create([injTodoLiCmp]);
