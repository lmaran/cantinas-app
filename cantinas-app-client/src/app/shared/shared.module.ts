// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

// components
import { AppModalComponent } from './components/confirmDelete/confirmDelete.component';
import { DisplayErrorComponent } from './components/display-error/display-error.component';
import { MessagesComponent } from './components/messages/messages.component';

// services
import { HttpErrorHandler } from './services/http-error-handler.service';
import { MessageService } from './services/message.service';
import { DishService } from './services/dish.service';
import { UserService } from './services/user.service';
import { ValidationService } from './services/validation.service';

@NgModule({
    imports: [CommonModule, ClarityModule],
    declarations: [AppModalComponent, DisplayErrorComponent, MessagesComponent],
    exports: [CommonModule, AppModalComponent, DisplayErrorComponent, MessagesComponent],
    providers: [HttpErrorHandler, MessageService, DishService, UserService, ValidationService],
})
export class SharedModule {}
