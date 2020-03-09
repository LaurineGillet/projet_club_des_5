import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormMailComponent } from './form-mail.component';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [FormMailComponent],
  exports: [FormMailComponent],
  entryComponents: [FormMailComponent],
  bootstrap: [FormMailComponent]
})
export class FormMailModule {}
