import {Component} from 'angular2/core';
import {UserListComponent} from "./users/users.component";

@Component({
    selector: 'my-app',
    templateUrl: '../dev/app.component.html',
    directives:[UserListComponent]
})

export class AppComponent {

}
