import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { LandingModule } from './app/Landing/landing.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


platformBrowserDynamic().bootstrapModule(LandingModule)
  .catch(err => console.error(err));