import {
  Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked,
  ViewChildren, QueryList, ChangeDetectorRef
} from '@angular/core';
import { ServersComponent } from './servers/servers.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {
  title = 'testProject';
  arrayOfNames = [{ name: "Jane", in: 0, gender: "female" }];
  @ViewChild(ServersComponent, { static: false }) childServersComponent: ServersComponent;
  @ViewChildren(ServersComponent) childrenServersComponent: QueryList<ServersComponent>;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    console.log('app ngOnInit');
  }

  ngAfterViewInit() {
    console.log(this.childServersComponent);
    //this.childServersComponent.personPassOne.name = "Kate";
    this.cd.detectChanges();
  }

  ngAfterViewChecked() {
    console.log(this.childServersComponent);
    console.log(this.childrenServersComponent);
    this.childrenServersComponent.forEach((item) => {
        //item.personPassOne.gender = "female";
      }
    );
    this.cd.detectChanges();
  }

  addToNamesArray(addedNames: { personName: string, personIndex: number, personGender: string }) {
    this.arrayOfNames.push({
      name: addedNames.personName,
      in: this.arrayOfNames.length,
      gender: addedNames.personGender
    })
  }
}
