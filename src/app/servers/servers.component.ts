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
  }

}
