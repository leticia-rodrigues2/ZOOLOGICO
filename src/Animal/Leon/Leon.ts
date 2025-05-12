
import { Animal } from '../Animal';
export class Leon extends Animal {
    lifeExpectancy(): string {
        return `${this.name} has a life expectancy of 20 years.`;
    }
}