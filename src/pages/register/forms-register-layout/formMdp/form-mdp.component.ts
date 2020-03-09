import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-form-mdp',
  templateUrl: './form-mdp.component.html',
  styleUrls: ['./form-mdp.component.scss']
})
export class FormMdpComponent implements OnInit {
  mdp: string;
  mdpConfirmation: string;

  constructor() { }

  ngOnInit() {
  }


}
