import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';

@Component({
  selector: 'app-medicine',
  standalone: false,
  
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.css'
})
export class MedicineComponent {

  medicines:Medicine[]=[];

  constructor(private medicineService:MedicineService){
  
  }
  ngOnInit(){
    this.getMedicineList();
  }

  getMedicineList(){
    this.medicineService.getAllMedicine().subscribe(data=>{
      this.medicines = data;
    })
  }

}
