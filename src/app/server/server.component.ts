import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: []
})
export class ServerComponent {
    @Input() person: { name: string, in: number, gender: string };
}