import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testProject';
  arrayOfNames = [{ name: "Jane", in: 0, gender: "female" }];
  turnOn: boolean = true;
  ngOnInit() {
    console.log('app ngOnInit');
  }

  addToNamesArray(addedNames: { personName: string, personIndex: number, personGender: string }) {
    this.turnOn = false;
    this.arrayOfNames.push({
      name: addedNames.personName,
      in: this.arrayOfNames.length,
      gender: addedNames.personGender
    })
  }
}
