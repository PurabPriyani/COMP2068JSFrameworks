import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import 'zone.js';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(FormsModule, CommonModule)
  ]
});
