import { Routes } from "@angular/router";
import { AppComponent } from './app.component';

export const rootRouterConfig: Routes =  [
  {
    path: "",
    redirectTo: "",
    pathMatch: AppComponent
  }
]
