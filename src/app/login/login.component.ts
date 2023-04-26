import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string = "";
  public password: string = "";

  constructor(
    private router: Router,
    private toaster: ToastrService,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.loginService.isLogined.subscribe((res) => {
      if (res) {
        this.router.navigate(["/manage"]);
      } else {
        this.router.navigate(["/login"]);
      }
    })
  }

  handleLogin() {
    if (this.username === this.password && this.username === "admin") {
      this.loginService.isLogined.next(true);
      this.toaster.success("Đăng nhập thanh công!", "Thành công");
    } else {
      this.toaster.error("Sai thông tin tài khoản hoặc mật khẩu!", "Thất bại");
    }
  }

}
