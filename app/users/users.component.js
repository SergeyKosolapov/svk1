System.register(["angular2/core", "./user.component", "./user.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, user_component_1, user_service_1;
    var UserListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_component_1_1) {
                user_component_1 = user_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            UserListComponent = (function () {
                function UserListComponent(_userService) {
                    this._userService = _userService;
                    this.selectedUser = {};
                    this.getUsers();
                }
                UserListComponent.prototype.onSelect = function (user) {
                    this.selectedUser = user;
                };
                UserListComponent.prototype.getUsers = function () {
                    var _this = this;
                    this._userService.getUsers().then(function (users) { return _this.users = users; });
                };
                UserListComponent.prototype.ngOnInit = function () {
                    this.getUsers();
                };
                UserListComponent = __decorate([
                    core_1.Component({
                        selector: "user-list",
                        templateUrl: "../dev/users/users.component.html",
                        directives: [user_component_1.UserComponent],
                        providers: [user_service_1.UserService],
                        styleUrls: ["../src/css/app.css"]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService])
                ], UserListComponent);
                return UserListComponent;
            })();
            exports_1("UserListComponent", UserListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzL3VzZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJVc2VyTGlzdENvbXBvbmVudCIsIlVzZXJMaXN0Q29tcG9uZW50LmNvbnN0cnVjdG9yIiwiVXNlckxpc3RDb21wb25lbnQub25TZWxlY3QiLCJVc2VyTGlzdENvbXBvbmVudC5nZXRVc2VycyIsIlVzZXJMaXN0Q29tcG9uZW50Lm5nT25Jbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFTQTtnQkFZSUEsMkJBQW9CQSxZQUF3QkE7b0JBQXhCQyxpQkFBWUEsR0FBWkEsWUFBWUEsQ0FBWUE7b0JBRnJDQSxpQkFBWUEsR0FBR0EsRUFBRUEsQ0FBQ0E7b0JBR3JCQSxJQUFJQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTtnQkFDcEJBLENBQUNBO2dCQUVNRCxvQ0FBUUEsR0FBZkEsVUFBZ0JBLElBQUlBO29CQUNoQkUsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsSUFBSUEsQ0FBQ0E7Z0JBQzdCQSxDQUFDQTtnQkFDREYsb0NBQVFBLEdBQVJBO29CQUFBRyxpQkFFQ0E7b0JBREdBLElBQUlBLENBQUNBLFlBQVlBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBLElBQUlBLENBQUNBLFVBQUNBLEtBQWFBLElBQUlBLE9BQUFBLEtBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLEVBQWxCQSxDQUFrQkEsQ0FBQ0EsQ0FBQ0E7Z0JBQzVFQSxDQUFDQTtnQkFDREgsb0NBQVFBLEdBQVJBO29CQUNJSSxJQUFJQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTtnQkFDcEJBLENBQUNBO2dCQXhCTEo7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUkEsUUFBUUEsRUFBRUEsV0FBV0E7d0JBQ3BCQSxXQUFXQSxFQUFFQSxtQ0FBbUNBO3dCQUNoREEsVUFBVUEsRUFBQ0EsQ0FBQ0EsOEJBQWFBLENBQUNBO3dCQUMxQkEsU0FBU0EsRUFBQ0EsQ0FBQ0EsMEJBQVdBLENBQUNBO3dCQUN2QkEsU0FBU0EsRUFBQ0EsQ0FBQ0Esb0JBQW9CQSxDQUFDQTtxQkFDbkNBLENBQUNBOztzQ0FtQkRBO2dCQUFEQSx3QkFBQ0E7WUFBREEsQ0F6QkEsQUF5QkNBLElBQUE7WUF6QkQsaURBeUJDLENBQUEiLCJmaWxlIjoidXNlcnMvdXNlcnMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgU2VyZ2V5IFYuIEtvc29sYXBvdiBvbiAxNC4wMi4yMDE2LlxyXG4gKi9cclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcbmltcG9ydCB7T25Jbml0fSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge1VzZXJDb21wb25lbnR9IGZyb20gXCIuL3VzZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuL3VzZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICBzZWxlY3RvcjogXCJ1c2VyLWxpc3RcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4uL2Rldi91c2Vycy91c2Vycy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgZGlyZWN0aXZlczpbVXNlckNvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6W1VzZXJTZXJ2aWNlXSxcclxuICAgIHN0eWxlVXJsczpbXCIuLi9zcmMvY3NzL2FwcC5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgdXNlcnM6IFVzZXJbXTtcclxuICAgIHB1YmxpYyBzZWxlY3RlZFVzZXIgPSB7fTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF91c2VyU2VydmljZTpVc2VyU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuZ2V0VXNlcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25TZWxlY3QodXNlcikge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRVc2VyID0gdXNlcjtcclxuICAgIH1cclxuICAgIGdldFVzZXJzKCl7XHJcbiAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UuZ2V0VXNlcnMoKS50aGVuKCh1c2VyczogVXNlcltdKT0+IHRoaXMudXNlcnMgPSB1c2Vycyk7XHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpOmFueXtcclxuICAgICAgICB0aGlzLmdldFVzZXJzKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
