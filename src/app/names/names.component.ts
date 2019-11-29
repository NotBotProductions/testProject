import { Component, EventEmitter, Output, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'names',
    templateUrl: './names.component.html',
    styleUrls: ['./names.component.css']
})
export class NamesComponent{
    @Output() onNameAdded = new EventEmitter<{ personName: string, personIndex: number, personGender: string }>();
    @ViewChild('gender', { static: false }) gender: ElementRef;

    perName = '';
    perGender = '';

    onChangeName(nameRef: HTMLInputElement) {
        this.perName = nameRef.value;
    }

    onChangeGender() {
        console.log(this.gender);
        this.perGender = this.gender.nativeElement.value;
    }    

    onClickOfButton() {
        this.onNameAdded.emit({ personName: this.perName, personIndex: 0, personGender: this.perGender })
    }
}