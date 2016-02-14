System.register(['angular2/core'], function(exports_1) {
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
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.user = { fName: "Sergey", lName: "Kosolapov", id: "123456789", phone: "0987 654321", email: "SK@gmail.com" };
                    this.showDetail = false;
                }
                AppComponent.prototype.onSelect = function () {
                    this.showDetail = true;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: '<h2 (click)="onSelect()"' +
                            '[class.clicked]="showDetail === true"' +
                            '>{{user.fName}} {{user.id}}</h2>' +
                            '<input [(ngModel)]="user.fName" type="text">' +
                            '<div *ngIf="showDetail === true">' +
                            'PhoneNumber: {{user.phone}}<br>' +
                            'Email: {{user.email}}<br>' +
                            '</div>',
                        styleUrls: ["../src/css/app.css"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIiwiQXBwQ29tcG9uZW50Lm9uU2VsZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQTtnQkFBQUE7b0JBY1FDLFNBQUlBLEdBQUdBLEVBQUNBLEtBQUtBLEVBQUdBLFFBQVFBLEVBQUVBLEtBQUtBLEVBQUdBLFdBQVdBLEVBQUVBLEVBQUVBLEVBQUVBLFdBQVdBLEVBQUVBLEtBQUtBLEVBQUNBLGFBQWFBLEVBQUVBLEtBQUtBLEVBQUNBLGNBQWNBLEVBQUNBLENBQUNBO29CQUN4R0EsZUFBVUEsR0FBR0EsS0FBS0EsQ0FBQ0E7Z0JBSTlCQSxDQUFDQTtnQkFIR0QsK0JBQVFBLEdBQVJBO29CQUNFRSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFHQSxJQUFJQSxDQUFDQTtnQkFDekJBLENBQUNBO2dCQWxCTEY7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsUUFBUUE7d0JBQ2xCQSxRQUFRQSxFQUFFQSwwQkFBMEJBOzRCQUNuQ0EsdUNBQXVDQTs0QkFDeENBLGtDQUFrQ0E7NEJBQ2xDQSw4Q0FBOENBOzRCQUM5Q0EsbUNBQW1DQTs0QkFDbENBLGlDQUFpQ0E7NEJBQ2pDQSwyQkFBMkJBOzRCQUM1QkEsUUFBUUE7d0JBRVJBLFNBQVNBLEVBQUNBLENBQUNBLG9CQUFvQkEsQ0FBQ0E7cUJBQ25DQSxDQUFDQTs7aUNBT0RBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FuQkEsQUFtQkNBLElBQUE7WUFuQkQsdUNBbUJDLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGU6ICc8aDIgKGNsaWNrKT1cIm9uU2VsZWN0KClcIicrXHJcbiAgICAgJ1tjbGFzcy5jbGlja2VkXT1cInNob3dEZXRhaWwgPT09IHRydWVcIicrXHJcbiAgICAnPnt7dXNlci5mTmFtZX19IHt7dXNlci5pZH19PC9oMj4nK1xyXG4gICAgJzxpbnB1dCBbKG5nTW9kZWwpXT1cInVzZXIuZk5hbWVcIiB0eXBlPVwidGV4dFwiPicrXHJcbiAgICAnPGRpdiAqbmdJZj1cInNob3dEZXRhaWwgPT09IHRydWVcIj4nK1xyXG4gICAgICdQaG9uZU51bWJlcjoge3t1c2VyLnBob25lfX08YnI+JytcclxuICAgICAnRW1haWw6IHt7dXNlci5lbWFpbH19PGJyPicrXHJcbiAgICAnPC9kaXY+J1xyXG4gICAgLFxyXG4gICAgc3R5bGVVcmxzOltcIi4uL3NyYy9jc3MvYXBwLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuIHB1YmxpYyB1c2VyID0ge2ZOYW1lIDogXCJTZXJnZXlcIiwgbE5hbWUgOiBcIktvc29sYXBvdlwiLCBpZDogXCIxMjM0NTY3ODlcIiwgcGhvbmU6XCIwOTg3IDY1NDMyMVwiLCBlbWFpbDpcIlNLQGdtYWlsLmNvbVwifTtcclxuICAgIHB1YmxpYyBzaG93RGV0YWlsID0gZmFsc2U7XHJcbiAgICBvblNlbGVjdCgpIHtcclxuICAgICAgdGhpcy5zaG93RGV0YWlsID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
