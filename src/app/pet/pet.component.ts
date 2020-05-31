import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pet } from '../shared/pet.model';
import { Food } from '../shared/food.model';
import { PetDataService } from '../shared/pet-data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit, OnDestroy {
  @ViewChild('formRef') formRefChild: NgForm;
  genders = ["male", "female"];
  @Input() pet: Pet;
  petExists: boolean = false;
  id: number = -1;
  paramsSubscr: Subscription;
  queryParamsSubscr: Subscription;
  fragSubcr: Subscription;
  priorID: number = -1;
  frag: string;

  constructor(private pds: PetDataService, private router: Router, private activeroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.activeroute.snapshot.params['id'];
    this.priorID = +this.activeroute.snapshot.queryParams.lastID;
    this.frag = this.activeroute.snapshot.fragment;
    this.queryParamsSubscr = this.activeroute.queryParams.subscribe(queryParams => {
      this.priorID = +queryParams['lastID'];
    });
    this.fragSubcr = this.activeroute.fragment.subscribe((fragment: string) => {
      this.frag = fragment;
    });
    this.paramsSubscr = this.activeroute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      if (this.id != -1) {
        this.pds.petArray.forEach((item) => {
          if (this.id == item.id) {
            this.pet = item;
          }
        });
      }      
    });
    if (this.id != -1) {
      this.pds.petArray.forEach((item) => {
        if (this.id == item.id) {
          this.pet = item;
        }
      });
    }

    if (this.pet) {
      this.petExists = true;
    }
    else {
      this.petExists = false;
    }
  }

  addFood() {
    let nextId: number = 0;
    if (this.pet.food.length > 0) {
      this.pet.food.forEach((item) => {
        if (item.food_id > nextId) {
          nextId = item.food_id;
        }
      });
      nextId++;
    }
    this.pet.food.push({id: this.pet.id, food_id: nextId, food_name: '', amount: '', frequency: ''}); 
  }  

  updateFood(food: Food[]) {
    this.pet.food = food;
  }

  deleteElement() {
    this.pds.deletePet(this.pet.id);
  }

  navigateBackToAddPet() {
    let result: boolean = false;
    result = window.confirm('Navigate back to Add Pet?');
    if (result) {
      //this.router.navigate(['../addpet'], {relativeTo: this.activeroute});
      this.router.navigate(['addpet'], { queryParams: { lastID: this.pet.id }, fragment: 'searchSection' });
    }
  }

  ngOnDestroy () {
    if (this.paramsSubscr && this.queryParamsSubscr && this.fragSubcr ) {
      this.paramsSubscr.unsubscribe();
      this.queryParamsSubscr.unsubscribe();
      this.fragSubcr.unsubscribe();
    }
  }
}
