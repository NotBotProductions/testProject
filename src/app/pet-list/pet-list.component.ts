import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pet } from '../shared/pet.model';
import { Food } from '../shared/food.model';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit, OnChanges {
  @ViewChild('formRef') formRefChild: NgForm;
  defaultPetType: string = 'dog';
  instructionText: string = '';
  img_url_text: string = '';
  genders = ["male", "female"];
  @Input('petList') setOfPets: Pet[];
  allPets: Pet[];
  foodLength: number = 0;

  constructor() { }

  ngOnChanges() {
    this.allPets = this.setOfPets;
  }

  ngOnInit(): void {
  }

  addFood(i: number) {
    this.foodLength = this.allPets[i].food.length;
    this.allPets[i].food.push(new Food(0, this.foodLength, '', '', ''));  
  }  

  updateFood(food: Food[], i: number) {
    this.allPets[i].food = food;
  }

  submitTopLevelData() {
    console.log(this.formRefChild);
    //this.formRefChild.setValue({
    //  petAndOwnerName: {
    //    pet_name: 'Shamsky',
    //    owner_name: 'Random Name'
    //  },
    //  pet_type: 'rodent',
    //  gender: 'female',
    //  email: 'RN@email.com',
    //  instructions: 'This is setValue'
    //});

    //this.formRefChild.form.patchValue({
      //petAndOwnerName: {
      //  pet_name: 'Shamsky'
      //}
    //});
    //this.formRefChild.reset();
  }

}
