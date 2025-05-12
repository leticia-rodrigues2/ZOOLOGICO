export abstract class Animal {
    constructor(public name: string) {}
    abstract lifeExpectancy (): string;
}