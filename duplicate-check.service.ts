import { Injectable, Output } from "@angular/core";
import TodoListComponent from "./todo-list.component";
import TodoInputComponent from "./todo-input.component";
import TodoModel from "./todo.model";
import { EventEmitter } from '@angular/core';

export interface DuplicateStatus {
    color: string,
    error: boolean
}
@Injectable()
export default class DuplicateCheckService {
    @Output() duplicateStatusChange = new EventEmitter<DuplicateStatus>();
    constructor() {}
    checkForDuplicates(lstOfComponents: TodoListComponent, inputTodo: TodoModel): DuplicateStatus {
        console.log("Setting errors")
        let duplicateStatus = {
            color: 'green',
            error: false
        };
        if (lstOfComponents.hasDuplicates(inputTodo)) {
            console.log("Red");
            duplicateStatus.color = 'red';
            duplicateStatus.error = true;
        }
        else { 
            console.log("Green");
            duplicateStatus.color = 'green';
            duplicateStatus.error = false;
        }
        console.log("Emitting Duplicate Status Change: ", duplicateStatus);
        this.duplicateStatusChange.emit(duplicateStatus);
        return duplicateStatus;
    }
}