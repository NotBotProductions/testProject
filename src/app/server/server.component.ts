import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    //selector: '[app-server]',    
    //selector: '.app-server',     
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent {
    stringIntOne = ' This is the data from inside the typescript file';
    stringIntTwo = 'This is returned from a function';
    numberVar: number = 45;

    typescriptFunction() {
        return this.numberVar;
    }
}