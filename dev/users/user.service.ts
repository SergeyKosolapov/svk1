/**
 * Created by Sergey V. Kosolapov on 15.02.2016.
 */
import {Injectable} from "angular2/core";
import {USERS} from "./mock-user";

@Injectable()
export class UserService {
    getUsers() {
      return Promise.resolve(USERS);
    }
}
