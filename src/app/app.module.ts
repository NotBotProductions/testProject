import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { AddPetFoodComponent } from './add-pet/add-pet-food/add-pet-food.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PetListComponent,
    AddPetComponent,
    AddPetFoodComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
