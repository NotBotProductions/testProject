import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { AddPetFoodComponent } from './add-pet/add-pet-food/add-pet-food.component';
import { BackgroundDirective } from './shared/background.directive';
import { DetectMouseDirective } from './shared/detect-mouse.directive';
import { DropdownDirDirective } from './shared/dropdown-dir.directive';
import { StructDirDirective } from './shared/struct-dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PetListComponent,
    AddPetComponent,
    AddPetFoodComponent,
    BackgroundDirective,
    DetectMouseDirective,
    DropdownDirDirective,
    StructDirDirective
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
