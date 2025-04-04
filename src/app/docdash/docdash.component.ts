import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-docdash',
  standalone: false,
  
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css'
})
export class DocdashComponent {

  patients:Patient[]=[];

  patient:Patient = new Patient;

  constructor(private patientService:PatientService, private router:Router,private docAuthService:DocauthService){}

  ngOnInit():void{
    this.getPatients();
  }

  getPatients(){
    this.patientService.getPatientList().subscribe(data=>{
      this.patients=data;
    });
  }

  update(id:number){
    this.router.navigate(['update-patient',id]); 
  }

  delete(id:number){
    this.patientService.deletePatient(id).subscribe(data=>{
      console.log(data);
      this.getPatients();
    })
  }

  view(id:number){
    this.router.navigate(['view-patient',id]);
  }

  logout(){
    this.docAuthService.logout();
    this.router.navigate(['home']);

  }
}
