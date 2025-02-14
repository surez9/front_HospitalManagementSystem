import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  
  private baseUrl="http://localhost:8080/api/v1/medicine/";

  constructor(private httpClient:HttpClient) { }

  getAllMedicine():Observable<Medicine[]>{
   return this.httpClient.get<Medicine[]>(`${this.baseUrl}all`);
  }

  saveMedicine(medicine:Medicine):Observable<Medicine>{
    return this.httpClient.post<Medicine>(`${this.baseUrl}insert`,medicine);
  }

  getMedicineById(id:number):Observable<Medicine>{
    return this.httpClient.get<Medicine>(`${this.baseUrl}${id}`);
  }

  updateMedicine(id:number,medicine:Medicine):Observable<Medicine>{
    return this.httpClient.put<Medicine>(`${this.baseUrl}update/${id}`,medicine);
  }

  deleteMedicine(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}delete/${id}`);
  }

}
