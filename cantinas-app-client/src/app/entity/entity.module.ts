import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { EntityListComponent } from './components/entity-list/entity-list.component';
import { EntityDetailComponent } from './components/entity-detail/entity-detail.component';
import { EntityRoutingModule } from './entity-routing.module';

@NgModule({
    imports: [SharedModule, EntityRoutingModule],
    declarations: [EntityListComponent, EntityDetailComponent],
})
export class EntityModule {}
