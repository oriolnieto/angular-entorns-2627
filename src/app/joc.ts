export class Joc {
    id: number;
    nom: string;
    preu: number;

    constructor(id: number, nom: string, preu: number) {
        this.id = id;
        this.nom = nom;
        this.preu = preu;
    }

    esJocPijo(id: number): boolean { // metode que comprova si el joc és pijo o no segons el preu, de prova, condicionals com java 
        if (this.preu > 50) {    
            return true;
        } else {
            return false;
        }
    }

    esJocChapa(id: number): boolean { // si val poquet es un joc chapa..
        if (this.preu < 5) {
            return true;
        } else {
            return false;
        }
    }

    getnom(): string {
        return this.nom;
    }
}