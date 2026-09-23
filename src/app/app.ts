import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte } from './interfaces/producte'; //PER PODER USAR LA iterface DE TIPUS Producte s'ha d'importar
import { Producte as ProducteClass } from './producte'; //PER PODER USAR LA CLASS DE TIPUS Producte s'ha d'importar i posar un alias per diferenciar-la de la interface
import { Joc } from './models/joc'; //PER PODER USAR LA iterface DE TIPUS Joc s'ha d'importar

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-entorns-2627');
    //OBJECTIU DE LA SESSIÓ 2: Veure la diferència entre JS i TS --> TS = JS + tipus.
    //ELS TIPUS no canvien com funciona el codi --> AJUDEN A DETECTAR ERRORS abans d'executar.
    // " undefined is not a function? " --> AIXÒ ÉS EL QUE VOLEM EVITAR!!!!!

    /*function saluda (nom) {
      return nom.toUpperCase();
    }

    saluda (40);
    --> Parameter 'nom' implicitly has an 'any' type
    */

   
    /*function saluda(nom:string) {
      return nom.toUpperCase();
    }

    saluda(40);

    --> Argument of type 'number' is not assignable to parameter of type 'string'.
    */

    //TIPUS BASICS
    nom: string = 'Angular';
    nom2: string = 'Laravel';
    versio : number = 20;
    actiu: boolean = true;

    //ARRAYS TIPATS
    colors : string[] = ['vermell', 'verd', 'blau'];
    frameworks: string[] = [this.nom, this.nom2];
    punts : number[] = [10, 15, 20];

    //TypeScrips infereix (adivina) el tipus automàticament
    ciutat = 'Lleida'; //string
    codiP = 25605; //number

    //objecte de tipus Producte

    producte: Producte = {
      id: 1, 
      nom : 'PC', 
      preu : 999,
      disponible : true
    };

    producteArray: Producte[] = [this.producte, this.producte, this.producte];

    p1 = new ProducteClass('Portàtil', 1200);

    productenou: Producte = {
      id: 2,
      nom: 'Yuseef',
      preu: 120,
      disponible: true,
      descripcio: 'Yuseef és un producte molt bo'
    }

    pnou = new ProducteClass('Yuseef', 120);

    alertProducte(pnou: ProducteClass) {
      alert(this.pnou.descompte());
    }

    constructor() {
      console.log(this.pnou.descompte());
      this.alertProducte(this.pnou);
    }

    element: Joc = {
}