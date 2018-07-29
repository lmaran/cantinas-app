// modules (vendor)
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// modules (app)
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

// components (global / single use)
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,
        CoreModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            name: 'Cantinas DevTools',
            maxAge: 25,
            logOnly: environment.production,
        }),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
