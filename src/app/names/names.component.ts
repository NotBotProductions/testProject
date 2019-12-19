import { Component, EventEmitter, Output, ViewEncapsulation, ViewChild, ElementRef, 
AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
    selector: 'names',
    templateUrl: './names.component.html',
    styleUrls: ['./names.component.css']
})
export class NamesComponent implements AfterViewInit, AfterViewChecked, OnDestroy {
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

    ngAfterViewInit() {
        console.log('names ngAfterViewInit');
    }

    ngAfterViewChecked() {
        console.log('names ngAfterViewChecked');
    }

    ngOnDestroy() {
        console.log('names ngOnDestroy');
    }
}