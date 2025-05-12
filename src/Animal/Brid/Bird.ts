
import { Animal } from '../Animal';
export class Brid extends Animal {
    lifeExpectancy(): string {
        return `${this.name} has a life expectancy of 5 years.`;
    }
}