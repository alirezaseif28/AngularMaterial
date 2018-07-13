import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactManagerAppComponent } from './contact-manager-app/contact-manager-app.component';
import { MainContentComponent } from './components/main-content/main-content.component';

const routes: Routes = [
  {
    path: "", component: ContactManagerAppComponent,
    children: [
      { path: "", component: MainContentComponent }
    ]
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactManagerRoutingModule { }
