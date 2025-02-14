import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }

  authenticate(username:string,password:string){
    if(username=="admin"&&password=="admin123"){
      sessionStorage.setItem('adminUsername',username);
      return true;
    }
    else{
      return false;
    }
  }

  isUserLoggedIn(){
    console.log("User Logged In");
    let user = sessionStorage.getItem('adminUsername');
    return !(user==null)
  }
  logout(){
    sessionStorage.removeItem('adminUsername');
  }
}
