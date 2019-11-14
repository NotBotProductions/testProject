import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testProject';
  arraySend = [{ name: '', in: 0, gender: '' }];

  onChangeName(event: Event) {
    console.log(event);
    this.arraySend[0].name = (<HTMLInputElement>event.target).value;
  }

  onChangeGender(event: Event) {
    this.arraySend[0].gender = (<HTMLInputElement>event.target).value;
  }

}
