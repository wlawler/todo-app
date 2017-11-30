import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ROUTES } from './routes';
import TodoListComponent from './todo-list.component';
import TodoListItemComponent from './todo-list-item.component';

@NgModule({
    entryComponents: [TodoListItemComponent],
    imports: [
       BrowserModule,
//       RouterModule.forRoot(ROUTES),
       HttpModule
    ],
    declarations: [AppComponent, TodoListComponent, TodoListItemComponent],
    exports: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}