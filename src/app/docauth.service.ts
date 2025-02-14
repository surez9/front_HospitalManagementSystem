import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

  authenticate(username:string,password:string){
    if(username=="doc"&&password=="doc123"){
      sessionStorage.setItem('docUsername',username);
      return true;
    }
    else{
      return false;
    }

  }

  isUserLoggedIn(){
    console.log("User Logged In");
    let user = sessionStorage.getItem('docUsername');
    return !(user==null)
  }
  logout(){
    sessionStorage.removeItem('docUsername');
  }
}
