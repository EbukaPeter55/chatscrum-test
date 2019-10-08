import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(router, dataservice) {
        this.router = router;
        this.dataservice = dataservice;
    }
    ngOnInit() {
    }
    //Login method
    login() {
        this.dataservice.login();
        console.log(this.dataservice.username);
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map