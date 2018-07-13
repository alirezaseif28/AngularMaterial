import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { MainContentComponent } from "./components/main-content/main-content.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { ContactManagerAppComponent } from "./contact-manager-app/contact-manager-app.component";
import { ContactManagerRoutingModule } from "./contact-manager-routing.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ContactManagerRoutingModule
  ],
  declarations: [ContactManagerAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent]
})
export class ContactManagerModule { }
