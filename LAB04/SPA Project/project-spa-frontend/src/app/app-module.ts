import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Project } from './project/project';
import { HttpClientModule } from '@angular/common/http';
import { ProjectService } from './services/project';

@NgModule({
  declarations: [
    App,
    Project
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    , HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(), 
    ProjectService
  ],
  bootstrap: [Project]
})
export class AppModule { }
