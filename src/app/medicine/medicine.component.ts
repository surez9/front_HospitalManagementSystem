import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine',
  standalone: false,
  
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.css'
})
export class MedicineComponent {

  medicines:Medicine[]=[];

  constructor(private medicineService:MedicineService,private router:Router){
  
  }
  ngOnInit(){
    this.getMedicineList();
  }

  getMedicineList(){
    this.medicineService.getAllMedicine().subscribe(data=>{
      this.medicines = data;
    })
  }

  update(id:number){
    this.router.navigate(['update-medicine',id]);
  }

}
