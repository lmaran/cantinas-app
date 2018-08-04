// modules (vendor)
import { NgModule } from '@angular/core';
// import { StoreModule } from '@ngrx/store';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

// modules (app)
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

// components (global / single use)
import { AppComponent } from './app.component';
// import { environment } from '../environments/environment';
// import { CustomSerializer } from './core/state/serializer';
// import { reducers } from './core/state/reducers';

@NgModule({
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,
        CoreModule.forRoot(),
        // StoreModule.forRoot(reducers, {}),

        // // integrates Angular router with NgRx DevTool
        // StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),

        // StoreDevtoolsModule.instrument({
        //     name: 'Cantinas DevTools',
        //     maxAge: 25,
        //     logOnly: environment.production,
        // }),
        // !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
    ],
    // providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
    bootstrap: [AppComponent],
})
export class AppModule {}
