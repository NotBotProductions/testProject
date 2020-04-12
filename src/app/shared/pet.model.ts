import { Medicines } from './medicines.model';
import { Food } from './food.model';

export class Pet {
    constructor(public id: number, public name: string, public owner_name: string, public type: string, public instructions: string, public meds: Medicines[], public food: Food[], public owner_email: string, public img_url: string, public gender: string) {}
}