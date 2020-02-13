import { Component } from "@angular/core";
import { UserService } from "src/services/providers/User.service";
import { User } from "src/entity/User";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  title = "Projet des 5";
  user: User;

  constructor(private userService: UserService) {
    this.init();
  }

  init() {
    this.userService.getUserById(7).subscribe(res => {
      this.user =  res;
      console.log(this.user);
    });
  }
}
