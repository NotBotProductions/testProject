import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pet } from '../shared/pet.model';
import { Food } from '../shared/food.model';
import { PetDataService } from '../shared/pet-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit, OnChanges {
  @ViewChild('formRef') formRefChild: NgForm;
  genders = ["male", "female"];
  allPets: Pet[];

  constructor(private pds: PetDataService, private router: Router, private activeroute: ActivatedRoute) { }

  ngOnChanges() {
    this.allPets = this.pds.petArray;
  }

  ngOnInit(): void {
    this.allPets = this.pds.petArray;
  }

  addFood(i: number) {
    let nextId: number = 0;
    if (this.allPets[i].food.length > 0) {
      this.allPets[i].food.forEach((item) => {
        if (item.food_id > nextId) {
          nextId = item.food_id;
        }
      });
      nextId++;
    }
    this.allPets[i].food.push({id: this.allPets[i].id, food_id: nextId, food_name: '', amount: '', frequency: ''}); 
  }  

  updateFood(food: Food[], i: number) {
    this.allPets[i].food = food;
  }

  deleteElement(petInfo: Pet) {
    let i: number = 0;
    this.allPets.forEach((item) => {
      if (item.id == petInfo.id) {
        this.allPets.splice(i, 1);
      }
      i++;
    });
  }

  navigateBackToAddPet() {
    let result: boolean = false;
    result = window.confirm('Navigate back to Add Pet?');
    if (result) {
      this.router.navigate(['../addpet'], {relativeTo: this.activeroute});
    }
  }

}
