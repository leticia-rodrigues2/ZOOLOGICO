import { AquaticAnimal } from "../Animal/AquaticAnimal/AquaticAnimal";


export class OrganizationAquaticAnimal {
  constructor(public animals: AquaticAnimal[]) {}

  showAquaticAnimal(): void {
    this.animals.forEach((animal) => {
      animal.swim(); 
    });
  }
}
