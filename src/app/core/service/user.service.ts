import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  hasRole(role:Role|Role[]){    
    if(role === Role.ADMIN || role.includes(Role.ADMIN)){
         return true
    }
    return true;
 
  }
}

export enum Role {
  ADMIN = "ADMIN",
  READER = "READER",
  TECH_ADMIN = "TECH_ADMIN"
}