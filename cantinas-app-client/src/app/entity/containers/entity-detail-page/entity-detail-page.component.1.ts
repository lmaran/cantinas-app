import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Entity } from '../../../core/models/entity';

import { Store, select } from '@ngrx/store';
import { ExtendedAppState } from '../../state/entity.interfaces';
import * as EntityActions from '../../state/entity.actions';
import * as EntitySelectors from '../../state/entity.selectors';
import { Observable, Subscription } from 'rxjs';
import { mergeMap, map, catchError, delay, tap } from 'rxjs/operators';

@Component({
    selector: 'app-entity-detail-page',
    templateUrl: './entity-detail-page.component.html',
    styleUrls: ['./entity-detail-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityDetailPageComponent implements OnInit {
    entity$: Observable<Entity>;
    entities$: Observable<Entity[]>;

    actionsSubscription: Subscription;

    isEditMode: boolean;
    submitted: boolean;

    title: string;
    categoryList: any;

    constructor(
        private store: Store<ExtendedAppState>,
        private router: Router,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit() {
        this.entities$ = this.store.select(EntitySelectors.getEntities);
        this.store.dispatch(new EntityActions.GetAll());

        // // https://github.com/ngrx/platform/blob/master/example-app/app/books/containers/view-book-page.component.ts
        // // this.actionsSubscription = this.route.params
        // //     .pipe(map(params => new EntityActions.GetOne(params.id)))
        // //     .subscribe(this.store);
        // // this.entity$ = this.store.select(EntitySelectors.getCurrentEntity).pipe(tap(x => console.log(x)));

        // // this.store.dispatch(new EntityActions.GetOne('5b45c5448fc8377b250df526'));
        // this.entity$ = this.store.select(EntitySelectors.getCurrentEntity);

        // this.route.params.subscribe(params => {
        //     // https://github.com/avatsaev/angular-contacts-app-example
        //     // update our id from the backend in case it was modified by another client
        //     this.store.dispatch(new EntityActions.GetOne(params.id));
        //     // this.entity$ = this.store.select(EntitySelectors.getCurrentEntity);
        //     // this.entity$ = this.store.select(params.id);
        // });
        // // const id: string = this.route.snapshot.params.id;
        // // console.log(id);
        // // this.store.dispatch(new EntityActions.GetOne(id));
        // // this.loading$ = this.store.select(EntitySelectors.isEntityLoading);
    }
}
