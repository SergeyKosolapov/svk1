System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var UserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UserComponent = (function () {
                function UserComponent() {
                    this.user = {};
                }
                UserComponent = __decorate([
                    core_1.Component({
                        selector: "user",
                        templateUrl: "../dev/users/user.component.html",
                        inputs: ["user"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserComponent);
                return UserComponent;
            })();
            exports_1("UserComponent", UserComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzL3VzZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbIlVzZXJDb21wb25lbnQiLCJVc2VyQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLQTtnQkFBQUE7b0JBT1FDLFNBQUlBLEdBQUdBLEVBQUVBLENBQUNBO2dCQUNsQkEsQ0FBQ0E7Z0JBUkREO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUVBLE1BQU1BO3dCQUNoQkEsV0FBV0EsRUFBRUEsa0NBQWtDQTt3QkFDL0NBLE1BQU1BLEVBQUNBLENBQUNBLE1BQU1BLENBQUNBO3FCQUNsQkEsQ0FBQ0E7O2tDQUlEQTtnQkFBREEsb0JBQUNBO1lBQURBLENBUkEsQUFRQ0EsSUFBQTtZQVJELHlDQVFDLENBQUEiLCJmaWxlIjoidXNlcnMvdXNlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBTZXJnZXkgVi4gS29zb2xhcG92IG9uIDE0LjAyLjIwMTYuXHJcbiAqL1xyXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwidXNlclwiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi4vZGV2L3VzZXJzL3VzZXIuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIGlucHV0czpbXCJ1c2VyXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVXNlckNvbXBvbmVudCB7XHJcbiBwdWJsaWMgdXNlciA9IHt9O1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
