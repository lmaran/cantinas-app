import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { EntityListComponent } from './components/entity-list/entity-list.component';
import { EntityDetailComponent } from './components/entity-detail/entity-detail.component';
import { EntityRoutingModule } from './entity-routing.module';

// const entityRoutes: Routes = [
//     { path: '', component: EntityListComponent },
//     { path: '/add', component: EntityDetailComponent },
//     { path: '/:id', component: EntityDetailComponent },
// ];

@NgModule({
    // imports: [CommonModule, ClarityModule, ReactiveFormsModule, RouterModule.forChild(entityRoutes)],
    imports: [CommonModule, ClarityModule, ReactiveFormsModule, EntityRoutingModule],
    declarations: [EntityListComponent, EntityDetailComponent],
})
export class EntityModule {}
