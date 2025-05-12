import { Brid } from "./Animal/Brid/Bird";
import { Finish } from "./Animal/Finish/Finish";
import { Leon } from "./Animal/Leon/Leon";
import { OrganizationAnimal } from "./OrganizationAnimal/OrganizationAnimal";

const animal = [
    new Finish("Finish Blue"),
    new Brid("Brid Yellow"),
    new Leon("Leon Red"),
]

const organization = new OrganizationAnimal(animal);
organization.showExpectation();
