import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl="http://localhost:8080/api/v1/patient/";

  getPatientList():Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseUrl+"all"}`)
  }

  deletePatient(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl+"delete"}/${id}`);
  }
  
}
