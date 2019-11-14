import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'names',
    templateUrl: './names.component.html',
    styleUrls: ['./names.component.css']
})
export class NamesComponent {
    @Output() onNameAdded = new EventEmitter<{ personName: string, personIndex: number, personGender: string }>();

    perName = '';
    perGender = '';

    onChangeName(event: Event) {
        this.perName = (<HTMLInputElement>event.target).value;
    }

    onChangeGender(event: Event) {
        this.perGender = (<HTMLInputElement>event.target).value;
    }    

    onClickOfButton() {
        this.onNameAdded.emit({ personName: this.perName, personIndex: 0, personGender: this.perGender })
    }
}