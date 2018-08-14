import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Entity } from '../../../core/models/entity';

import { Store, ActionsSubject } from '@ngrx/store';
import { ExtendedAppState } from '../../state/entity.interfaces';
import * as EntityActions from '../../state/entity.actions';
import * as RouterActions from '../../../core/state/router/router.actions';
import * as EntitySelectors from '../../state/entity.selectors';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ofType } from '@ngrx/effects';
import * as BreadcrumbActions from '../../../core/state/breadcrumb/breadcrumb.actions';
import { BreadcrumbItem } from '../../../core/interfaces/breadcrumb-item.interface';
import * as BreadcrumbSelectors from '../../../core/state/breadcrumb/breadcrumb.selectors';

@Component({
    selector: 'app-entity-edit-page',
    templateUrl: './entity-edit-page.component.html',
    styleUrls: ['./entity-edit-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityEditPageComponent implements OnInit, OnDestroy {
    entity$: Observable<Entity>;
    redirectSub$: Subscription;
    breadcrumbItems$: Observable<BreadcrumbItem[]>;

    title: string;

    constructor(
        private store: Store<ExtendedAppState>,
        private route: ActivatedRoute,
        private actionsSubject: ActionsSubject,
        private router: Router
    ) {}

    ngOnInit() {
        this.title = 'Editeaza entitate';
        this.entity$ = this.store.select(EntitySelectors.getCurrentEntity);

        // const id: string = this.route.snapshot.params.id;

        // // https://github.com/ngrx/platform/blob/master/example-app/app/books/containers/view-book-page.component.ts
        // this.actionsSubscription = this.route.params
        //     .pipe(map(params => new EntityActions.GetOne(params.id)))
        //     .subscribe(this.store);

        // https://github.com/avatsaev/angular-contacts-app-example
        this.route.params.subscribe(params => {
            if (params.id) {
                this.store.dispatch(new EntityActions.GetOne(params.id));
            }
        });

        // after update redirect to /entities ...don't forget to unsubscribe
        // https://github.com/avatsaev/angular-contacts-app-example/blob/master/src/app/views/contacts/contact-new/contact-new.component.ts
        this.redirectSub$ = this.actionsSubject
            .asObservable()
            .pipe(ofType(EntityActions.EntityActionTypes.UPDATE_SUCCESS))
            .subscribe((action: EntityActions.UpdateEntitySuccess) => this.router.navigate(['/entities']));

        this.breadcrumbItems$ = this.store.select(BreadcrumbSelectors.getBreadcrumbItems);
        this.store.dispatch(new BreadcrumbActions.GetBreadcrumb());

        const breadcrumbItems: BreadcrumbItem[] = [
            {
                name: 'Entitati',
                url: '/entities',
            },
            {
                name: 'Entitate: Produs',
                url: '/entities',
            },
        ];

        this.store.dispatch(new BreadcrumbActions.SetBreadcrumb(breadcrumbItems));
    }

    updateEntity(entity: Entity): void {
        console.log(333);
        this.store.dispatch(new EntityActions.UpdateEntity(entity));
    }

    goBack = function() {
        this.store.dispatch(new RouterActions.Back());
    };

    ngOnDestroy() {
        this.redirectSub$.unsubscribe();
    }
}
