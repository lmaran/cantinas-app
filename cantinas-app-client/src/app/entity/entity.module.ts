import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { EntityListPageComponent } from './containers/entity-list-page/entity-list-page.component';
import { EntityListComponent } from './components/entity-list/entity-list.component';
import { EntityDetailComponent } from './components/entity-detail/entity-detail.component';
import { EntityRoutingModule } from './entity-routing.module';

@NgModule({
    imports: [SharedModule, EntityRoutingModule],
    declarations: [EntityListPageComponent, EntityListComponent, EntityDetailComponent],
})
export class EntityModule {}
