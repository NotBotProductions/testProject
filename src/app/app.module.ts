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
import { PetDataService } from './shared/pet-data.service';
import { Routes, RouterModule } from '@angular/router';

const projectRoutes: Routes = [
  { path: '', component: AddPetComponent },
  { path: 'addpet', component: AddPetComponent },
  { path: 'petlist', component: PetListComponent }
]

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
    FormsModule,
    RouterModule.forRoot(projectRoutes)
  ],
  providers: [PetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
