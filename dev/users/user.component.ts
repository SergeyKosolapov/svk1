/**
 * Created by Sergey V. Kosolapov on 14.02.2016.
 */
import {Component} from "angular2/core";

@Component({
    selector: "user",
    templateUrl: "../dev/users/user.component.html",
    inputs:["user"]
})

export class UserComponent {
 public user = {};
}

