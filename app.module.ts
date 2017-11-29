import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component.ts';
import { ROUTES } from './routes.ts';

@NgModule({
    imports: [
       BrowserModule,
       RouterModule.forRoot(ROUTES),
       HttpModule
    ],
    declarations: [ AppComponent ]
})
export class AppModule {}