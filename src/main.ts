import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic() // Load App and angular feature
  .bootstrapModule(AppModule) // initialize the app
  .catch((err) => console.log(err));
