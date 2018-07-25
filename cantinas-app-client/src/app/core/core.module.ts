// CoreModule is a conventional name for an NgModule with providers for the singleton services you load when the application starts.
// Import CoreModule in the root AppModule only. Never import CoreModule in any other module.
// Consider making CoreModule a pure services module with no declarations.

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// services
import { HttpErrorHandler } from './services/http-error-handler.service';
import { MessageService } from './services/message.service';
import { DishService } from './services/dish.service';
import { UserService } from './services/user.service';
import { ValidationService } from './services/validation.service';
import { EntityService } from './services/entity.service';

@NgModule({
    imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
    declarations: [],
})
export class CoreModule {
    // use the .forRoot() method to create a singleton instance of our module’s services
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [HttpErrorHandler, MessageService, DishService, UserService, ValidationService, EntityService],
        };
    }
}
