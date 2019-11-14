import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  isDisabled: boolean = true;
  arrayNames: { name: string, in: number, gender: string }[] = [];
  @Input() person: { name: string, in: number, gender: string };
  indexValue: number;

  constructor() {

    setTimeout(() => {
      this.isDisabled = false;
    }, 3000);
  }

  ngOnInit() {
  }

  onClickOfButton() { 
    this.indexValue = this.arrayNames.length;
    this.arrayNames.push({ name: this.person[0].name, in: this.indexValue, gender: this.person[0].gender });
  }
}
