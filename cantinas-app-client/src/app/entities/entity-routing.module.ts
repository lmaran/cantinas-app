//
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import {ContactsComponent} from './contacts.component';
// import {ContactNewComponent} from './contact-new/contact-new.component';
// import {ContactsIndexComponent} from './contacts-index/contacts-index.component';
// import {ContactDetailsComponent} from './contact-details/contact-details.component';
// import {ContactEditComponent} from './contact-edit/contact-edit.component';
// import {TitleResolver} from '@app-core/resolvers/title.resolver';

import { EntityListComponent } from './components/entity-list/entity-list.component';
import { EntityDetailComponent } from './components/entity-detail/entity-detail.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: ContactsComponent,
//     children: [
//       {
//         path: '',
//         component: ContactsIndexComponent,
//         data: {title: 'Contacts index'},
//         pathMatch: 'full',
//         resolve: {title: TitleResolver}
//       },
//       {
//         path: 'new',
//         component: ContactNewComponent,
//         data: {title: 'New contact'},
//         pathMatch: 'full',
//         resolve: {title: TitleResolver}
//       },
//       {
//         path: ':contactId',
//         component: ContactDetailsComponent,
//         data: {title: 'Contact details'},
//         pathMatch: 'full',
//         resolve: {title: TitleResolver}
//       },
//       {
//         path: ':contactId/edit',
//         component: ContactEditComponent,
//         data: {title: 'Edit contact'},
//         pathMatch: 'full',
//         resolve: {title: TitleResolver}
//       }
//     ]
//   }
// ];

const routes: Routes = [
    { path: '', component: EntityListComponent },
    { path: 'add', component: EntityDetailComponent },
    { path: ':id', component: EntityDetailComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EntityRoutingModule {}
