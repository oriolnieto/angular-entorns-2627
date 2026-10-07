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

export function getNomComplet(nom: string, cognom: string): string {
  return `${nom} ${cognom}`;
}

export function getInicials(nom: string, cognom: string): string {
  return `${nom.charAt(0)}${cognom.charAt(0)}`;
}

export function getGeneracio(edat: number): string {
  if (edat >= 10 && edat <= 24) {
    return 'Generació Z';
  }
  if (edat >= 25 && edat <= 40) {
    return 'Generació Millennial';
  }
  else  {
      return 'Generació no definida';
  }
}