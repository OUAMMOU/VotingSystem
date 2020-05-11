import { Component, OnInit } from '@angular/core';
import { IsLoginService } from '../Services/is-login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserLoggedIn : boolean=false
  constructor(public Islogin :IsLoginService) { }

  ngOnInit(): void {
    console.log(this.isUserLoggedIn)
  }
  ;
  

}
