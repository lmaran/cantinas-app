import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Entity } from '../../../core/models/entity';

import { Store } from '@ngrx/store';
import { ExtendedAppState } from '../../state/entity.interfaces';
import * as EntityActions from '../../state/entity.actions';
import * as RouterActions from '../../../core/state/actions/router.actions';
import * as EntitySelectors from '../../state/entity.selectors';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-entity-create-page',
    templateUrl: './entity-create-page.component.html',
    styleUrls: ['./entity-create-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityCreatePageComponent implements OnInit {
    entity$: Observable<Entity>;

    title: string;

    constructor(private store: Store<ExtendedAppState>) {}

    ngOnInit() {
        this.title = 'Adauga entitate';
    }

    goBack = function() {
        // this.store.dispatch(new EntityActions.GoBack());
        this.store.dispatch(new RouterActions.Back());
    };
}
