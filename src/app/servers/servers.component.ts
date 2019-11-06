import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  isDisabled: boolean = true;
  clickedData: string ="";
  clickedID: number;
  wasClicked: boolean = false;
  colorValue: string;
  actualColorAssigned: string;
  arrayNames = ['Jim', 'George'];
  nameValue = 'Katie';

  constructor() {
    setTimeout(()=>{
      this.isDisabled = false;
    } , 3000);
  }

  ngOnInit() {
  }

  onClickOfButton() {
    this.clickedData = "This is data from the click";
    this.clickedID = 23;
    this.wasClicked = true;
    this.arrayNames.push(this.nameValue);
  }

  assignColor() {
    this.colorValue = Math.random() > .5 ? 'green' : 'red';
    let style = {
      'background-color': this.colorValue/*,
      'opacity': Math.random()*/
    }
    return style;
  }
}
