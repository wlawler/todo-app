import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { SalsaComponent } from './salsa/salsa.component';
import { BachataComponent } from './bachata/bachata.component';
import { ZoukComponent } from './zouk/zouk.component';

@NgModule({
  declarations: [
    AppComponent,
    SalsaComponent,
    BachataComponent,
    ZoukComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
