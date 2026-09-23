import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte } from './interfaces/producte'; //PER PODER USAR LA iterface DE TIPUS Producte s'ha d'importar
import { Producte as ProducteClass } from './producte'; //PER PODER USAR LA CLASS DE TIPUS Producte s'ha d'importar i posar un alias per diferenciar-la de la interface
import { Joc } from './joc'; // Per poder crear instancies de la classe Joc
import { saludar, esMajorEdat, sumarArrays } from './funcions';
import { Alumne } from './alumne';


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

    /*

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
      */

   
    jocs: Joc[] = [
      new Joc(1, 'Minecraft', 29.99, true),
      new Joc(2, 'Zelda', 59.99, true),
      new Joc(3, 'Mario Kart', 49.99, false),
      new Joc(4, 'Celeste', 4.99, true),
      new Joc(5, 'Hades', 24.99, false)
    ];

    getActius(): Joc[] {
      const jocsActius: Joc[] = [];

      for (const joc of this.jocs) {
        if (joc.disponible === true) {
          jocsActius.push(joc);
        }
      }

      return jocsActius;
    }

    findById(id: number) {
      return this.jocs.find(joc => joc.id === id); // el .find simplifica tot el procés.
    }

    formatarElement(element: Joc): string {
      return `Id: ${element.id}, nom: ${element.nom}, preu: ${element.preu} €, disponible: ${element.disponible}`;
    }

    
    
    
    

    constructor() {
      console.log(this.jocs);
      console.log(saludar('Yuseef'));
      console.log(esMajorEdat(27));
      console.log(sumarArrays([7, 7, 7]));

      const alumne1 = new Alumne('Yuseef', 29, 'DAW', [3, 4, 2]);
      const alumne2 = new Alumne('Oriol', 19, 'DAw', [9, 10, 8]);

      console.log(alumne1.presentar());
      console.log(alumne1.haAprovat);
      console.log(alumne2.presentar());
      console.log(alumne2.haAprovat);
    }

}