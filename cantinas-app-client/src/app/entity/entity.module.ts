// modules (vendor)
import { NgModule } from '@angular/core';

// modules (app)
import { SharedModule } from '../shared/shared.module';
import { EntityRoutingModule } from './entity-routing.module';

// containers (smart)
import { EntityListPageComponent } from './containers/entity-list-page/entity-list-page.component';
import { EntityDetailPageComponent } from './containers/entity-detail-page/entity-detail-page.component';

// components (pure)
import { EntityListComponent } from './components/entity-list/entity-list.component';
import { EntityDetailComponent } from './components/entity-detail/entity-detail.component';

export const CONTAINERS = [EntityListPageComponent, EntityDetailPageComponent];
export const COMPONENTS = [EntityListComponent, EntityDetailComponent];

@NgModule({
    imports: [SharedModule, EntityRoutingModule],
    declarations: [...CONTAINERS, ...COMPONENTS],
})
export class EntityModule {}
