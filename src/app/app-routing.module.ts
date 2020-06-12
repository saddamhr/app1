import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentComponent } from './appointment/appointment.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [

  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: AppointmentComponent},
  {path: "list", component: ListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
