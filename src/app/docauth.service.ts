import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

  authenticate(username:string,password:string){
    if(username=="doc"&&password=="doc123"){
      sessionStorage.setItem('username',username);
      return true;
    }
    else{
      return false;
    }

  }
}
