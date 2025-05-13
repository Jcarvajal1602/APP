import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/components/producto/app.component';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()] 
}).catch(err => console.error(err));