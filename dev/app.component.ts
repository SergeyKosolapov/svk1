import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h2 (click)="onSelect()"'+
     '[class.clicked]="showDetail === true"'+
    '>{{user.fName}} {{user.id}}</h2>'+
    '<input [(ngModel)]="user.fName" type="text">'+
    '<div *ngIf="showDetail === true">'+
     'PhoneNumber: {{user.phone}}<br>'+
     'Email: {{user.email}}<br>'+
    '</div>'
    ,
    styleUrls:["../src/css/app.css"]
})
export class AppComponent {
 public user = {fName : "Sergey", lName : "Kosolapov", id: "123456789", phone:"0987 654321", email:"SK@gmail.com"};
    public showDetail = false;
    onSelect() {
      this.showDetail = true;
    }
}
