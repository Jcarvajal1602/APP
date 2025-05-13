import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/components/producto/app.component';
import { config } from './app/app.config.server';

const bootstrap = () =>
  bootstrapApplication(AppComponent, {
    providers: [
      ...config.providers,
      provideHttpClient()
    ]
  });

export default bootstrap;