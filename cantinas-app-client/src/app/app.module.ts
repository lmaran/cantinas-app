// modules (vendor)
import { NgModule } from '@angular/core';

// modules (app)
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

// components (global / single use)
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [AppRoutingModule, CoreModule.forRoot()],
    bootstrap: [AppComponent],
})
export class AppModule {}
