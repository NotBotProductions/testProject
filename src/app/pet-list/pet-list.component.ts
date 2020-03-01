import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  @ViewChild('formRef') formRefChild: NgForm;
  defaultPetType: string = 'dog';
  instructionText: string = '';
  genders = ["male", "female"];

  constructor() { }

  ngOnInit(): void {
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
