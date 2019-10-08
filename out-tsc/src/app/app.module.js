import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { TeamtaskComponent } from './teamtask/teamtask.component';
import { TeamtaskcardsComponent } from './teamtaskcards/teamtaskcards.component';
import { UsertaskComponent } from './usertask/usertask.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MytaskComponent } from './mytask/mytask.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { AuthGuard } from './auth.guard';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            SignupComponent,
            TeamtaskComponent,
            TeamtaskcardsComponent,
            UsertaskComponent,
            HomeComponent,
            LoginComponent,
            MytaskComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            FormsModule
        ],
        providers: [DataService, AuthGuard,],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map