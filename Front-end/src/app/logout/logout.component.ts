import { Component, OnInit } from '@angular/core';
import { IsLoginService } from '../Services/is-login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private LogoutService : IsLoginService) { }

  ngOnInit(): void {
    this.LogoutService.logout();
  }

}
