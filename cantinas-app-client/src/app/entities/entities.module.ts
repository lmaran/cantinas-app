import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EntityListComponent } from './components/entity-list/entity-list.component';
import { EntityDetailComponent } from './components/entity-detail/entity-detail.component';

const entityRoutes: Routes = [
    { path: 'entities', component: EntityListComponent },
    { path: 'entities/add', component: EntityDetailComponent },
    { path: 'entities/:id', component: EntityDetailComponent },
];

@NgModule({
    imports: [RouterModule.forChild(entityRoutes)],
    declarations: [EntityListComponent, EntityDetailComponent],
})
export class EntitiesModule {}
