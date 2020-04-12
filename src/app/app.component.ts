import { Component } from '@angular/core';
import { Pet } from './shared/pet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'petInfo';
  PetOrSummary: string = "pet";
  pet: Pet[] = [];

  selectedPetOrSummary(selection: string) {
    this.PetOrSummary = selection;
  }

  transmitPetData(petObject: Pet) {
    petObject.id = this.pet.length;
    petObject.food.forEach((item) => {
      item.id = petObject.id;
    });
    this.pet.push(new Pet(petObject.id, petObject.name, petObject.owner_name, petObject.type, petObject.instructions, [], petObject.food, petObject.owner_email, petObject.img_url, petObject.gender));
    console.log(this.pet);
    this.PetOrSummary = 'summary';
    this.PetOrSummary = 'pet';
  }
}
