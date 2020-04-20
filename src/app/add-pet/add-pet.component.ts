import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pet } from '../shared/pet.model';
import { Food } from '../shared/food.model';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  @ViewChild('formRef') formRefChild: NgForm;  
  defaultPetType: string = 'dog';
  instructionText: string = '';
  img_url_text: string = '';
  genders = ["male", "female"];
  foodLength: number;
  test: string = '';
  pet: Pet[] = [new Pet(0, "", "", "", "", [], [], "", "", "")];
  sendPet: Pet[] = [new Pet(0, "", "", "", "", [], [], "", "", "")];
  @Output() sendPetObject = new EventEmitter<Pet>();

  constructor() { } 

  ngOnInit(): void {
  }

  submitTopLevelData() {
    let found: boolean; 
    //console.log(this.formRefChild);
    this.pet[0].id = 0;
    this.pet[0].name = this.formRefChild.value.petAndOwnerName.pet_name; 
    this.pet[0].owner_name = this.formRefChild.value.petAndOwnerName.owner_name;
    this.pet[0].type = this.formRefChild.value.pet_type;
    this.pet[0].instructions = this.formRefChild.value.instructions;
    this.pet[0].owner_email = this.formRefChild.value.email; 
    this.pet[0].img_url = this.formRefChild.value.img_url;
    this.pet[0].gender = this.formRefChild.value.gender;
    this.sendPet = JSON.parse(JSON.stringify(this.pet));;
    this.formRefChild.reset();
    this.pet[0].food.splice(0,this.pet[0].food.length);    
    this.sendPetObject.emit(this.sendPet[0]);
    this.formRefChild.form.patchValue({
      pet_type: 'dog'
    });
 
  }  

  addFood() {
    this.foodLength = this.pet[0].food.length;
    this.pet[0].food.push(new Food(0, this.foodLength, '', '', ''));  
  }

  updateFood(food: Food[]) {
    this.pet[0].food = food;
  }
}
