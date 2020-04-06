import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-pseudo',
  templateUrl: './form-pseudo.component.html',
  styleUrls: ['./form-pseudo.component.scss']
})
export class FormPseudoComponent implements OnInit {
  pseudo: string;

  constructor() { }

  ngOnInit() {
  }


}
