export class Producte {
    nom: string;
    preu: number;

    constructor(nom: string, preu: number) {
        this.nom = nom;
        this.preu = preu;
    }

    toString(): string {
        return `Producte: ${this.nom}, Preu: ${this.preu}`;
    }

    getpreuAmbIVA(): number {
        return this.preu * 1.21;
    }

    descripcio(): string {
        return `El producte ${this.nom} té un preu de ${this.preu}€`;
    }

    descompte(): number {
        return this.preu - (this.preu * 10 / 100);
    }
}