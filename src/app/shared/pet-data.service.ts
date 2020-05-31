import { Pet } from './pet.model';
import { Injectable, EventEmitter } from '@angular/core'; 

@Injectable()
export class PetDataService {
    deleteEmitter = new EventEmitter();

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

    deletePet(id: number) {
        for (let I = 0; I < this.petArray.length; I++ ) {
            if (this.petArray[I].id == id) {
                this.petArray.splice(I, 1);
                //this.deleteEmitter.emit();
                break;
            }
        }
    }
}