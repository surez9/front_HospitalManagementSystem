import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'admin',component:AdmindashComponent
  },
  {
    path:'appointmentlist',component:AppointmentComponent
  },
  {
    path:'create-appointment',component:CreateAppointmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
