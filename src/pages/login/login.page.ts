import { Component, OnInit } from "@angular/core";
import { User } from "src/entity/User";
import { UserService } from "src/services/providers/User.service";
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "login.page.html",
  styleUrls: ["login.page.scss"]
})
export class LoginPage implements OnInit {

logFormGroup: FormGroup;
isSubmitted = false;

  constructor(
    private userService: UserService,
    private router: Router,
    public formBuilder: FormBuilder
    ) {}

    ngOnInit() {
      this.logFormGroup = this.formBuilder.group({
        email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        password: ['', [Validators.required]]
      });
    }

    get errorControl() {
      return this.logFormGroup.controls;
    }

  logForm() {
    this.isSubmitted = true;
    const data = new FormData();
    data.append("email", this.logFormGroup.value);
    data.append("password", this.logFormGroup.value);
    console.log(this.logFormGroup.value);

    this.userService.login(data).subscribe(res => {
      console.log(res);
      if (res.result === true) {
        this.router.navigateByUrl('/dashboard');
      }
    });
  }

}
