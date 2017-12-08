import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ROUTES } from './routes';
import TodoListComponent from './todo-list.component';
import TodoListItemComponent from './todo-list-item.component';
import TodoInputComponent from './todo-input.component';
import DynamicComponentFactory from './dynamic-component.factory';
import DuplicateCheckService from './duplicate-check.service';

@NgModule({
    entryComponents: [TodoListItemComponent],
    imports: [
       BrowserModule,
//       RouterModule.forRoot(ROUTES),
       HttpModule
    ],
    providers: [DynamicComponentFactory, DuplicateCheckService],
    declarations: [AppComponent, TodoListComponent, TodoInputComponent, TodoListItemComponent],
    exports: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}