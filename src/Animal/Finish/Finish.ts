
import { Animal } from '../Animal';
export class Finish extends Animal {
    lifeExpectancy(): string {
        return `${this.name} has a life expectancy of 10 years.`;
    }
}