import { Component, Input, ViewEncapsulation, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { ServerComponent } from '../server/server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnChanges, DoCheck, AfterContentInit, AfterContentChecked {
  @Input() personPassOne: { name: string, in: number, gender: string };
  @ContentChild(ServerComponent, {static: false}) childServerComponent: ServerComponent;
  @ContentChildren(ServerComponent) childrenServerComponent: QueryList<ServerComponent>;

  constructor() { }

  ngOnChanges() {
    console.log('servers ngOnChanges');
  }

  ngDoCheck() {
    console.log('servers ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('servers ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('servers ngAfterContentChecked');
    console.log(this.childServerComponent);
    console.log(this.childrenServerComponent);
    this.childServerComponent.person.name = "Kate";
    this.childrenServerComponent.forEach((item)=>{
        item.person.gender = "female";
      }
    );
  }
}
