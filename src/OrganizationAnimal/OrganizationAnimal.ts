import { Animal } from "../Animal/Animal";

export class OrganizationAnimal {
    constructor(public animal: Animal[]) {}
    showExpectation(): void {
    this.animal.forEach((animal) => {
        console.log(animal.lifeExpectancy());
    });
   }
}