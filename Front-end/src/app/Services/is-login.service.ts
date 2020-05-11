import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsLoginService {

  constructor() { }
  isUserLoogedIn()
  {
    let user=sessionStorage.getItem('authenticateUser')
    return !(user === null)
  }
  logout()
    {
    sessionStorage.removeItem('authenticateUser');
    }
}
