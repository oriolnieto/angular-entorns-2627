import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
  nom: string = 'Juanchu';
  cognom: string = 'Cherelu Strogonov';
  edat: number = 25;
  cicle: string = '2n DAW';
}
