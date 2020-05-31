import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pet } from '../shared/pet.model';
import { Food } from '../shared/food.model';
import { PetDataService } from '../shared/pet-data.service';

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
  pet: Pet[] = [new Pet(0, "", "", "", "", [], [], "", "", "")];
  showStruct: boolean = false;

  constructor(private pds: PetDataService) { } 

  ngOnInit(): void {
  }

  submitTopLevelData() {
    //console.log(this.formRefChild);
    this.pet[0].id = 0;
    this.pet[0].name = this.formRefChild.value.petAndOwnerName.pet_name; 
    this.pet[0].owner_name = this.formRefChild.value.petAndOwnerName.owner_name;
    this.pet[0].type = this.formRefChild.value.pet_type;
    this.pet[0].instructions = this.formRefChild.value.instructions;
    this.pet[0].owner_email = this.formRefChild.value.email; 
    this.pet[0].img_url = this.formRefChild.value.img_url;
    this.pet[0].gender = this.formRefChild.value.gender;
    this.pds.addPet(JSON.parse(JSON.stringify(this.pet[0])));
    this.formRefChild.reset();
    this.pet[0].food.splice(0,this.pet[0].food.length);    
    this.formRefChild.form.patchValue({
      pet_type: 'dog'
    });
 
  }  

  addFood() {
    let nextId: number = 0;
    if (this.pet[0].food.length > 0) {
      this.pet[0].food.forEach((item) => {
        if (item.food_id > nextId) {
          nextId = item.food_id;
        }
      });
      nextId++;
    }
    this.pet[0].food.push(new Food(0, nextId, '', '', ''));  
  }

  updateFood(food: Food[]) {
    this.pet[0].food = food;
  }
}
