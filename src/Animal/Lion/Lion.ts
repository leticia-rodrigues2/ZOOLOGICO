
import { Animal } from '../Animal';
import { LandAnimal } from '../LandAnimal/LandAnimal';
export class Lion extends Animal implements LandAnimal {
    lifeExpectancy(): string {
        return `${this.name} has a life expectancy of 20 years.`;
    }
    andar(): void {
        console.log(`${this.name} is walking majestically!`);
    }
}