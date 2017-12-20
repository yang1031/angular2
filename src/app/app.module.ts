import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { rootRouterConfig } from "./app.routes";
import { AppComponent } from './app.component';
import { FooterComponent } from './common/footer/footer.component';
import { IndexComponent } from './main/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
