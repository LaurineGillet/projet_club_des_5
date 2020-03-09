import { Component } from "@angular/core";
import { User } from "src/entity/User";
import { UserService } from "src/services/providers/User.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "login.page.html",
  styleUrls: ["login.page.scss"]
})
export class LoginPage {
  user: User = {
    email: "",
    password: ""
  };

  constructor(private userService: UserService, private router: Router) {}

  logForm() {
    const data = new FormData();
    data.append("email", this.user.email);
    data.append("password", this.user.password);

    this.userService.login(data).subscribe(res => {
      console.log(res);
      if (res.result === true) {
        this.router.navigateByUrl('/dashboard');
      }
    });
  }

}
