import { Injectable } from "@angular/core";
import TodoListComponent from "./todo-list.component";
import TodoInputComponent from "./todo-input.component";

export interface DuplicateStatus {
    color: string,
    error: boolean
}
@Injectable()
export default class DuplicateCheckService {
    constructor() {}
    checkForDuplicates(lstOfComponents: TodoListComponent, suspectText: string): DuplicateStatus {
        console.log("Setting errors")
        let duplicateStatus = {
            color: 'green',
            error: false
        };
        if (lstOfComponents.hasDuplicates(suspectText)) {
            console.log("Red");
            duplicateStatus.color = 'red';
            duplicateStatus.error = true;
        }
        else { 
            console.log("Green");
            duplicateStatus.color = 'green';
            duplicateStatus.error = false;
        }
        return duplicateStatus;
    }
}