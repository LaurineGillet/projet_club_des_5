import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormPseudoComponent } from './form-pseudo.component';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [FormPseudoComponent],
  exports: [FormPseudoComponent],
  entryComponents: [FormPseudoComponent],
  bootstrap: [FormPseudoComponent]
})
export class FormPseudoModule {}
