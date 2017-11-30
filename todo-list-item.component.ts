import { Component, Input } from '@angular/core'


@Component({
    selector: 'cmp-todo',
    template: `
        <li>{{id}}</li>
    `
})
export default class TodoListItemComponent {
    @Input() public id = 1;
    @Input() public what = '';
    @Input() public done = false
}