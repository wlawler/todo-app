import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module.ts';

const platformBrowser = platformBrowserDynamic();
platformBrowser.bootstrapModule(AppModule);