import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'
import {AppModule} from './app.module';

const PlatformBrowser = platformBrowserDynamic(); 
PlatformBrowser.bootstrapModule (AppModule);
