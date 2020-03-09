import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormRecapComponent } from './form-recap.component';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [FormRecapComponent],
  exports: [FormRecapComponent],
  entryComponents: [FormRecapComponent],
  bootstrap: [FormRecapComponent]
})
export class FormRecapModule {}
