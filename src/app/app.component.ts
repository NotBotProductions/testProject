import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testProject';
  arrayOfNames = [{ name: "Jane", in: 0, gender: "female" }];

  addToNamesArray(addedNames: { personName: string, personIndex: number, personGender: string }) {
    this.arrayOfNames.push({
      name: addedNames.personName,
      in: this.arrayOfNames.length,
      gender: addedNames.personGender
    })
  }
}
