import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  @ViewChild('formRef') formRefChild: NgForm;  
  defaultPetType: string = 'dog';
  instructionText: string = '';
  genders = ["male", "female"];

  constructor() { }

  ngOnInit(): void {
  }

  submitTopLevelData() {
    console.log(this.formRefChild);
  }  

}
