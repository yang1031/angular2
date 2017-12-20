import { Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { IndexComponent } from './main/index/index.component';
export const rootRouterConfig: Routes =  [
  {
    path: "",
    redirectTo: "index",
    pathMatch: 'full'
  },
  {
    path: "index",
    component: IndexComponent
  }
]
