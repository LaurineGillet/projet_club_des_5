import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  etapes = [
    {
      id: 1,
      libelle: "Je saisi mon adresse mail"
    },
    {
      id: 2,
      libelle: "Je crée mon mot de passe"
    },
    {
      id: 3,
      libelle: "Je choisi un pseudo"
    },
    {
      id: 4,
      libelle: "Je saisi ma date de naissance"
    },
    {
      id: 5,
      libelle: "Je vérifie mes infos et je valide mon inscription"
    }
  ];

  constructor() { }

  ngOnInit() {
  }


}
