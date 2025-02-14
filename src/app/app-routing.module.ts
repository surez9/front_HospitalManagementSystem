import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicineComponent } from './medicine/medicine.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdloginComponent } from './adlogin/adlogin.component';

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
  },
  {
    path:'docdash',component:DocdashComponent
  },
  {
    path:'createpatient',component:CreatePatientComponent
  },
  {
    path:'medicineList',component:MedicineComponent
  },
  {
    path:'create-medicine',component:CreateMedicineComponent
  },
  {
    path:'update-patient/:id',component:UpdatePatientComponent
  },
  {
    path:'update-medicine/:id',component:UpdateMedicineComponent
  },
  {
    path:'view-patient/:id',component:ViewPatientComponent
  },
  {
    path:'doclogin',component:DocloginComponent
  },
  {
    path:'adlogin',component:AdloginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
