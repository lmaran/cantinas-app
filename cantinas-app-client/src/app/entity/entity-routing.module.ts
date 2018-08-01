import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntityListPageComponent } from './containers/entity-list-page/entity-list-page.component';

import { EntityDetailPageComponent } from './containers/entity-detail-page/entity-detail-page.component';

const routes: Routes = [
    { path: '', component: EntityListPageComponent },
    { path: 'add', component: EntityDetailPageComponent },
    { path: ':id', component: EntityDetailPageComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EntityRoutingModule {}
