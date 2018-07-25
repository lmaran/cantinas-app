import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { DishListComponent } from './dish/dish-list/dish-list.component';
import { DishDetailComponent } from './dish/dish-detail/dish-detail.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './entity/state/entity.reducer';
import { EntityEffects } from './entity/state/entity.effects';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { Layout2Component } from './layout2/layout2.component';
import { Header2Component } from './header2/header2.component';
import { VerticalNavComponent } from './vertical-nav/vertical-nav.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        UserListComponent,
        UserDetailComponent,
        DishListComponent,
        DishDetailComponent,
        Layout2Component,
        Header2Component,
        VerticalNavComponent,
    ],
    imports: [
        AppRoutingModule,
        StoreModule.forRoot({
            entity: reducer,
        }),
        EffectsModule.forRoot([EntityEffects]),
        CoreModule.forRoot(), // forRoot => singleton
        SharedModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
