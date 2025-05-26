import { Bird } from "./Animal/Bird/Bird";
import { Fish } from "./Animal/Fish/Fish";
import {  Lion } from "./Animal/Lion/Lion";
import { OrganizationAnimal } from "./OrganizationAnimal/OrganizationAnimal";
import { OrganizationLandAnimal } from "./OrganizationLandAnimal/OrganizationLandAnimal";
import { OrganizationAquaticAnimal } from "./OrganizationAquaticAnimal/OrganizationAquaticAnimal";

const animal = [
    new Fish("Fish Blue"),
    new Bird("Bird Yellow"),
    new Lion("Leon Red"),
]
const landAnimal = [
    new Lion("Lion Green"),     
    new Lion("Lion Blue"),
]

const aquaticAnimal= [
    new Fish("Fish Blue"),  
    new Fish("Fish Red"),
    new Fish("Fish Yellow"),]


const organizationAquaticAnimal = new OrganizationAquaticAnimal(aquaticAnimal);
organizationAquaticAnimal.showAquaticAnimal();
const organizationLandAnimal = new OrganizationLandAnimal(landAnimal);
organizationLandAnimal.showLandAnimal();
const organization = new OrganizationAnimal(animal);
organization.showExpectation();
