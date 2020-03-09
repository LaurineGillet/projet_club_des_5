import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormRegisterLayoutComponent } from './form-register-layout.component.';
import { FormMdpModule } from './formMdp/form-mdp.module';
import { FormMailModule } from './formMail/form-mail.module';
import { FormPseudoModule } from './formPseudo/form-pseudo.module';
import { FormBirthdayModule } from './formBirthday/form-birthday.module';
import { FormRecapModule } from './formRecap/form-recap.module';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FormMdpModule,
    FormMailModule,
    FormPseudoModule,
    FormBirthdayModule,
    FormRecapModule
  ],
  declarations: [FormRegisterLayoutComponent],
  exports: [FormRegisterLayoutComponent],
  entryComponents: [FormRegisterLayoutComponent],
  bootstrap: [FormRegisterLayoutComponent]
})
export class FormRegisterLayoutModule {}
