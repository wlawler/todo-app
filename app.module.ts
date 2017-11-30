import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser'
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ROUTES } from './routes';

@NgModule({
    imports: [
       BrowserModule,
//       RouterModule.forRoot(ROUTES),
       HttpModule
    ],
    declarations: [AppComponent],
    exports: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}