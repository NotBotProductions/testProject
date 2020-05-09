import { Pet } from './pet.model';
import { Injectable } from '@angular/core'; 

@Injectable()
export class PetDataService {
    constructor() {}

    petArray: Pet[] = [];

    addPet(petToAdd: Pet) {
        let nextId: number = 0;
        if (this.petArray.length > 0) {
            this.petArray.forEach((item) => {
                if (item.id > nextId) {
                    nextId = item.id;
                }
            });
            nextId++;
            petToAdd.id = nextId;
        }
        petToAdd.food.forEach((item) => {
            item.id = petToAdd.id;
        });        
        this.petArray.push(petToAdd);
    }
}