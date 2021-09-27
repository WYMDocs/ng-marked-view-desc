import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
    setTimeout(() => {
      const preloader: any = document.querySelectorAll('.preloader')[0];
      document.body.removeChild(preloader);
    }, 1000);
  })
    .catch(err => console.error(err));
});
