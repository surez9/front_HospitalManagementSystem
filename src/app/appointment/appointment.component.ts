import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment',
  standalone: false,
  
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {

  appointments:Appointment[]=[];
  constructor(private appointmentService:AppointmentService){}

  ngOnInit():void{
    this.getAllAppointments();
  }

  getAllAppointments(){
    this.appointmentService.getAllAppointment().subscribe(data=>{
      this.appointments=data;
    })
  }

  delete(id:number){
    this.appointmentService.deleteAppointment(id).subscribe(data=>{
      console.log(data);
      this.getAllAppointments();
    })
  }
}
