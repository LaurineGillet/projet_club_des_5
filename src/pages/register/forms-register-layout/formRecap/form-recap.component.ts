import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/entity/User';

@Component({
  selector: 'app-form-recap',
  templateUrl: './form-recap.component.html',
  styleUrls: ['./form-recap.component.scss']
})
export class FormRecapComponent implements OnInit {
@Input() userRegister: User;
  constructor() { }

  ngOnInit() {
  }


}
