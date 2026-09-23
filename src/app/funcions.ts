export function saludar(nom: string): string { // s'ha de ficar export per a que es pugui utilitzar a app.ts a cada funció, apres a les dolentes :)
    return `Hola ${nom}!`;
  }

export function esMajorEdat(edat: number): boolean {
    if (edat >= 18) {
        return true;
    } else {
        return false;
    }
  }

  export function sumarArrays(nums: number[]): number[] {
    let suma: number[] = [];
    for (let i = 0; i < nums.length; i++) { // codi agafat de practices de JavaScrip DAM1 (24-25)
        suma.push(nums[i] + 10);
    }
    return suma;
  }