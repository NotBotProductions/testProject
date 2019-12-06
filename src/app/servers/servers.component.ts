import { Component, Input, ViewEncapsulation, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnChanges, DoCheck, AfterContentInit, AfterContentChecked {
  @Input() personPassOne: { name: string, in: number, gender: string };
  
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
  }
}
