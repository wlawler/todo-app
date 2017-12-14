//This typescript file imports two more modules. On another note, I just realized that to comment in typescript is to use a different command than to comment in html//
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platformBrowser = platformBrowserDynamic();
platformBrowser.bootstrapModule(AppModule);