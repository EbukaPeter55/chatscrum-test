import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { TeamtaskComponent } from './teamtask/teamtask.component';
import { TeamtaskcardsComponent } from './teamtaskcards/teamtaskcards.component';
import { UsertaskComponent } from './usertask/usertask.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MytaskComponent } from './mytask/mytask.component';
import { AuthGuard } from './auth.guard';
const routes = [
    { path: 'teamtask', component: TeamtaskComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'teamtaskcards', component: TeamtaskcardsComponent,
        canActivate: [AuthGuard]
    },
    { path: 'usertask', component: UsertaskComponent },
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'mytask', component: MytaskComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map