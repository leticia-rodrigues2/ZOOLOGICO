
import { Animal } from '../Animal';
export class Bird extends Animal {
    lifeExpectancy(): string {
        return `${this.name} has a life expectancy of 5 years.`;
    }
}