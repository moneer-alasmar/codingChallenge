import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { InfoComponent } from "./info/info.component";

const routes: Routes = [
  { path: "", component: MainComponent },
  { path: "contact", component: InfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
