import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-birthday',
  templateUrl: './form-birthday.component.html',
  styleUrls: ['./form-birthday.component.scss']
})
export class FormBirthdayComponent implements OnInit {
  birthday: string;

  constructor() { }

  ngOnInit() {
  }


}
