import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginService.isLogined.subscribe((res) => {
      if (res) {
        this.router.navigate(["/"]);
      } else {
        this.router.navigate(["/login"]);
      }
    })
  }

}
