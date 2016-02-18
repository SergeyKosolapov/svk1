System.register(["angular2/core", "./mock-user"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mock_user_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_user_1_1) {
                mock_user_1 = mock_user_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService() {
                }
                UserService.prototype.getUsers = function () {
                    return Promise.resolve(mock_user_1.USERS);
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], UserService);
                return UserService;
            })();
            exports_1("UserService", UserService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6WyJVc2VyU2VydmljZSIsIlVzZXJTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiVXNlclNlcnZpY2UuZ2V0VXNlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBQTtnQkFLQUMsQ0FBQ0E7Z0JBSEdELDhCQUFRQSxHQUFSQTtvQkFDRUUsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsaUJBQUtBLENBQUNBLENBQUNBO2dCQUNoQ0EsQ0FBQ0E7Z0JBSkxGO29CQUFDQSxpQkFBVUEsRUFBRUE7O2dDQUtaQTtnQkFBREEsa0JBQUNBO1lBQURBLENBTEEsQUFLQ0EsSUFBQTtZQUxELHFDQUtDLENBQUEiLCJmaWxlIjoidXNlcnMvdXNlci5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgU2VyZ2V5IFYuIEtvc29sYXBvdiBvbiAxNS4wMi4yMDE2LlxyXG4gKi9cclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xyXG5pbXBvcnQge1VTRVJTfSBmcm9tIFwiLi9tb2NrLXVzZXJcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuICAgIGdldFVzZXJzKCkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFVTRVJTKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
