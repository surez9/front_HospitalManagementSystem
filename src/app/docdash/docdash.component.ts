import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-docdash',
  standalone: false,
  
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css'
})
export class DocdashComponent {

  patients:Patient[]=[];

  constructor(private patientService:PatientService){}

  ngOnInit():void{
    this.getPatients();
  }

  getPatients(){
    this.patientService.getPatientList().subscribe(data=>{
      this.patients=data;
    });
  }

}
