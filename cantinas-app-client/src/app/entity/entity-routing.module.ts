import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntityListPageComponent } from './containers/entity-list-page/entity-list-page.component';

import { EntityDetailComponent } from './components/entity-detail/entity-detail.component';

const routes: Routes = [
    { path: '', component: EntityListPageComponent },
    { path: 'add', component: EntityDetailComponent },
    { path: ':id', component: EntityDetailComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EntityRoutingModule {}
