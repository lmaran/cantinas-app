import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Entity } from '../../../core/models/entity';
import { ClrLoadingState } from '@clr/angular';

import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import * as EntityActions from '../../state/entity.actions';
import * as RouterActions from '../../../core/state/actions/router.actions';
import * as EntitySelectors from '../../state/entity.selectors';
import { ExtendedAppState } from '../../state/entity.interfaces';

@Component({
    selector: 'app-entity-list-page',
    templateUrl: './entity-list-page.component.html',
    styleUrls: ['./entity-list-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityListPageComponent implements OnInit {
    entities$: Observable<Entity[]>;
    loading$: Observable<boolean>;
    refreshBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

    constructor(private store: Store<ExtendedAppState>) {}

    ngOnInit() {
        this.entities$ = this.store.select(EntitySelectors.getEntities);
        this.loading$ = this.store.select(EntitySelectors.isEntityLoading);
        this.store.dispatch(new EntityActions.GetAll());
    }

    refreshEntityList() {
        this.store.dispatch(new EntityActions.GetAll());
    }

    deleteEntity = function(entity) {
        this.store.dispatch(new EntityActions.DeleteEntity(entity._id));
    };

    goBack = function() {
        this.store.dispatch(new RouterActions.Back());
    };

    // goToAddEntity = function() {
    //     this.store.dispatch(new RouterActions.Go({ path: ['/entities/add'] }));
    // };
}
