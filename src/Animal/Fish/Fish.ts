
import { Animal } from '../Animal';
import { AquaticAnimal } from '../AquaticAnimal/AquaticAnimal';
export class Fish extends Animal implements AquaticAnimal {
    lifeExpectancy(): string {
        return `${this.name} has a life expectancy of 10 years.`;
    }
    swim(): void {
    console.log(`${this.name} is swimming!`);
  }
}