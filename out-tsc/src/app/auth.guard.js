import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let AuthGuard = class AuthGuard {
    constructor(_dataService, _router) {
        this._dataService = _dataService;
        this._router = _router;
    }
    canActivate() {
        if (this._dataService.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['']);
            return false;
        }
    }
};
AuthGuard = tslib_1.__decorate([
    Injectable()
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth.guard.js.map