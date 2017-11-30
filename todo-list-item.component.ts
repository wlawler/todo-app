import { Component, Input } from '@angular/core'


@Component({
    selector: 'cmp-todo',
    template: `
        <li>{{id}}:{{what}}</li>
    `
})
export default class TodoListItemComponent {
    @Input() public id = 1;
    @Input() public what = undefined;
    @Input() public done = false
}