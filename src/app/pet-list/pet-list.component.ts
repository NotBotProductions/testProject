import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pet } from '../shared/pet.model';
import { PetDataService } from '../shared/pet-data.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit, OnChanges {
  @ViewChild('formRef') formRefChild: NgForm;
  genders = ["male", "female"];
  allPets: Pet[];

  constructor(private pds: PetDataService ) { }

  ngOnChanges() {
    this.allPets = this.pds.petArray;
  }

  ngOnInit(): void {
    this.allPets = this.pds.petArray;
    /*this.pds.deleteEmitter.subscribe(() => {
      window.alert('Pet Was Deleted');
    });*/
  }

}
