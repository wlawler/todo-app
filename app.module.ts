import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/PlatformBrowser'
import {HttpModule } from '@angular/http';
import {AppComponent} from './app.component'
    
@NgModule({
    imports: [
        BrowserModule,
        HttpModule
    ],
    declarations: [ AppComponent ]
})

export class AppModule {}