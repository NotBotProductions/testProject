import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../../shared/food.model';

@Component({
  selector: 'app-add-pet-food',
  templateUrl: './add-pet-food.component.html',
  styleUrls: ['./add-pet-food.component.css']
})
export class AddPetFoodComponent implements OnInit {
  @Input('food') food: Food[];
  @Output() setPetFood = new EventEmitter<Food[]>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeName() {
    this.setPetFood.emit(this.food);
  }

  removeFood(j: number) {
    for (let i = 0; i <= this.food.length; i++) {
      if (this.food[i].food_id == j) {
        this.food.splice(i,1);
      }
    }
  }
}
