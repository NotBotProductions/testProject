import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  @Input() personPassOne: { name: string, in: number, gender: string };

  constructor() { }
}
