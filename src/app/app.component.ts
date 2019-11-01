import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testProject';
  twoWayBinding = "";

  onChangeInput(event: Event){
    console.log(event);
    this.title = (<HTMLInputElement>event.target).value;
  }  
}
