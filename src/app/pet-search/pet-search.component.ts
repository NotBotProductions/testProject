import { Component, OnInit } from '@angular/core';
import { Pet } from '../shared/pet.model';
import { PetDataService } from '../shared/pet-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-search',
  templateUrl: './pet-search.component.html',
  styleUrls: ['./pet-search.component.css']
})
export class PetSearchComponent implements OnInit {
  searchstring: string;
  pets: Pet[] = [];
  showOptions: boolean = false;

  constructor(private pds: PetDataService, private router: Router) { }

  ngOnInit(): void {
  }

  searchString(search: string) {
    this.pets.length = 0;

    let skip: boolean = false;

    for (let I = 0; I < this.pds.petArray.length; I++) {
      for (let J = 0; J < this.pds.petArray[I].food.length; J++) {
        if (this.pds.petArray[I].food[J].food_id.toString().includes(search) || 
            this.pds.petArray[I].food[J].food_name.toLowerCase().includes(search.toLowerCase())) {
              this.pets.push(JSON.parse(JSON.stringify(this.pds.petArray[I])));
              skip = true;
              break;
        }
      }
      if (!skip) {
        if (this.pds.petArray[I].id.toString().includes(search) || 
            this.pds.petArray[I].name.toLowerCase().includes(search.toLowerCase()) ||
            this.pds.petArray[I].owner_name.toLowerCase().includes(search.toLowerCase()) || 
            this.pds.petArray[I].owner_email.toLowerCase().includes(search.toLowerCase())) {
              this.pets.push(JSON.parse(JSON.stringify(this.pds.petArray[I])));
        }
      }
      skip = false;
    }

    if (this.pets) {
      this.showOptions = true;
    } 
    else {
      this.showOptions = false;
    }
    this.router.navigate(['petsearch']);
  }

  selectPet(id: number) {
    this.showOptions = false;
    this.router.navigate(['petsearch', id]);
  }
}
