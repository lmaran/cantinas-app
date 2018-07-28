// CoreModule is a conventional name for an NgModule with providers for the singleton services you load when the application starts.
// Import CoreModule in the root AppModule only. Never import CoreModule in any other module.
// Consider making CoreModule a pure services module with no declarations.

// modules (vendor)
import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule } from '@angular/router';

// import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// modules (app)
import { SharedModule } from '../shared/shared.module'; // we need clarity for home, about or layout components

// services (singleton)
import { HttpErrorHandler } from './services/http-error-handler.service';
import { MessageService } from './services/message.service';
import { DishService } from './services/dish.service';
import { UserService } from './services/user.service';
import { ValidationService } from './services/validation.service';
import { EntityService } from './services/entity.service';
import { AuthenticationService } from './services/authentication.service';

// components (global / single use)
import { Layout2Component } from './components/layout2/layout2.component';
import { Header2Component } from './components/header2/header2.component';
import { VerticalNavComponent } from './components/vertical-nav/vertical-nav.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

// export const COMPONENTS = [Layout2Component, Header2Component, VerticalNavComponent, AboutComponent, HomeComponent];
export const COMPONENTS = [Layout2Component, Header2Component, VerticalNavComponent, AboutComponent, HomeComponent];

@NgModule({
    imports: [RouterModule, BrowserModule, BrowserAnimationsModule, HttpClientModule, SharedModule],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS],
})
export class CoreModule {
    // use the .forRoot() method to create a singleton instance of our module’s services
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                HttpErrorHandler,
                MessageService,
                DishService,
                UserService,
                ValidationService,
                EntityService,
                AuthenticationService,
            ],
        };
    }
}
