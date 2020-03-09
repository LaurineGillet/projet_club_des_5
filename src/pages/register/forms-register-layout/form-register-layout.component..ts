import { Component, OnInit, ViewChild } from '@angular/core';
import { FormMailComponent } from './formMail/form-mail.component';
import { FormMdpComponent } from './formMdp/form-mdp.component';
import { FormPseudoComponent } from './formPseudo/form-pseudo.component';
import { FormBirthdayComponent } from './formBirthday/form-birthday.component';
import { User } from 'src/entity/User';

@Component({
  selector: 'app-form-register-layout',
  templateUrl: './form-register-layout.component.html',
  styleUrls: ['./form-register-layout.component.scss']
})
export class FormRegisterLayoutComponent implements OnInit {
    @ViewChild('formMail',  {static: false}) email: FormMailComponent;
    @ViewChild('formMdp',  {static: false}) mdp: FormMdpComponent;
    @ViewChild('formPseudo',  {static: false}) pseudo: FormPseudoComponent;
    @ViewChild('formBirthday',  {static: false}) birthday: FormBirthdayComponent;

    userRegister: User = {
      email: null,
      password: null,
      password_confirmation: null,
      // pseudo: null,
      // birthday: null
    };
    chooseComponent = 1;


  constructor() {}

  decrementePage() {
      if (this.chooseComponent > 1 ) {
          this.chooseComponent --;
      }
  }
  incrementePage() {
      if (this.chooseComponent < 5 ) {
          this.chooseComponent ++;
      }
  }
  checkRecap() {
    this.userRegister = {
      email: this.email.mail,
      password: this.mdp.mdp,
      password_confirmation: this.mdp.mdpConfirmation,
      // pseudo: this.pseudo.pseudo,
      // birthday: this.birthday.birthday
    };
    this.chooseComponent ++;
    console.log(this.userRegister);
  }

  register() {
    const data = new FormData();
    data.append("email", this.email.mail);
    data.append("password", this.mdp.mdp);
    data.append("password_confirmation", this.mdp.mdpConfirmation);
  }


  ngOnInit() {
  }


}
