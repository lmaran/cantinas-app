import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Entity } from '../../../core/models/entity';

import { Store } from '@ngrx/store';
import { ExtendedAppState } from '../../state/entity.interfaces';
import * as EntityActions from '../../state/entity.actions';
import * as EntitySelectors from '../../state/entity.selectors';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-entity-detail-page',
    templateUrl: './entity-detail-page.component.html',
    styleUrls: ['./entity-detail-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityDetailPageComponent implements OnInit {
    entity$: Observable<Entity>;

    title: string;

    constructor(private store: Store<ExtendedAppState>, private route: ActivatedRoute) {}

    ngOnInit() {
        this.entity$ = this.store.select(EntitySelectors.getCurrentEntity);

        // const id: string = this.route.snapshot.params.id;

        // // https://github.com/ngrx/platform/blob/master/example-app/app/books/containers/view-book-page.component.ts
        // this.actionsSubscription = this.route.params
        //     .pipe(map(params => new EntityActions.GetOne(params.id)))
        //     .subscribe(this.store);

        // https://github.com/avatsaev/angular-contacts-app-example
        this.route.params.subscribe(params => {
            // console.log('id: ' + params.id);
            if (params.id) {
                this.store.dispatch(new EntityActions.GetOne(params.id));
            }
            // this.store.dispatch(new EntityActions.GetOne(params.id));
        });
    }
}
