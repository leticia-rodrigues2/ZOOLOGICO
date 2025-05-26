import { LandAnimal } from "../Animal/LandAnimal/LandAnimal";

export class OrganizationLandAnimal {
  constructor(public animals: LandAnimal[]) {}

  showLandAnimal(): void {
    this.animals.forEach((animal) => {
      animal.andar(); 
    });
  }
}
