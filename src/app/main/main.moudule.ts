import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routing } from './main-routing.module';

@NgModule({
  declarations: [
    routing
  ],
  imports: [BrowserModule],
  providers: []
})

export class MainMoudule { }
