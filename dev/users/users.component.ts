/**
 * Created by Sergey V. Kosolapov on 14.02.2016.
 */
import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {UserComponent} from "./user.component";
import {UserService} from "./user.service";
import {User} from "./user";

@Component({
   selector: "user-list",
    templateUrl: "../dev/users/users.component.html",
    directives:[UserComponent],
    providers:[UserService],
    styleUrls:["../src/css/app.css"]
})

export class UserListComponent implements OnInit {
    public users: User[];
    public selectedUser = {};

    constructor(private _userService:UserService) {
        this.getUsers();
    }

    public onSelect(user) {
        this.selectedUser = user;
    }
    getUsers(){
        this._userService.getUsers().then((users: User[])=> this.users = users);
    }
    ngOnInit():any{
        this.getUsers();
    }
}


