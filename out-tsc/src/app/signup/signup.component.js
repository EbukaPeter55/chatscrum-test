import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let SignupComponent = class SignupComponent {
    constructor(router, dataservice) {
        this.router = router;
        this.dataservice = dataservice;
        this.create_new_project = false;
    }
    ngOnInit() {
    }
    changeUserToOwner() {
        this.dataservice.createuser_usertype = 'owner';
    }
    changeOwnerToUser() {
        this.dataservice.createuser_usertype = 'user';
    }
    showCreateProject() {
        this.create_new_project = !this.create_new_project;
    }
    createProject() {
        console.log("project creatinnnnnnnnnnnnnnnn");
        this.dataservice.createuser_usertype = "Owner";
        this.dataservice.createuser_password = "password";
    }
    createUser() {
        this.dataservice.createUser();
    }
};
SignupComponent = tslib_1.__decorate([
    Component({
        selector: 'app-signup',
        templateUrl: './signup.component.html',
        styleUrls: ['./signup.component.css']
    })
], SignupComponent);
export { SignupComponent };
//# sourceMappingURL=signup.component.js.map