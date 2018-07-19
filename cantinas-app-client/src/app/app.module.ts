import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthenticationService } from './authentication.service';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { DishListComponent } from './dish/dish-list/dish-list.component';
import { DishDetailComponent } from './dish/dish-detail/dish-detail.component';

import { DisplayErrorComponent } from './core/display-error/display-error.component';

import { AppModalComponent } from './shared/components/confirmDelete/confirmDelete.component';
import { HttpErrorHandler } from './shared/services/http-error-handler.service';
import { MessageService } from './shared/services/message.service';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './entity/state/entity.reducer';
import { EntityEffects } from './entity/state/entity.effects';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        UserListComponent,
        UserDetailComponent,
        DishListComponent,
        DishDetailComponent,
        DisplayErrorComponent,
        AppModalComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        ClarityModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        StoreModule.forRoot({
            entity: reducer,
        }),
        EffectsModule.forRoot([EntityEffects]),
    ],
    providers: [AuthenticationService, HttpErrorHandler, MessageService],
    bootstrap: [AppComponent],
})
export class AppModule {}
