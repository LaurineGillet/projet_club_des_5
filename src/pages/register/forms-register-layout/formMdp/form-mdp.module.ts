import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormMdpComponent } from './form-mdp.component';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [FormMdpComponent],
  exports: [FormMdpComponent],
  entryComponents: [FormMdpComponent],
  bootstrap: [FormMdpComponent]
})
export class FormMdpModule {}
