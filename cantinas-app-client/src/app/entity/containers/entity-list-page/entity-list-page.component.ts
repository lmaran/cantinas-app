import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Entity } from '../../../core/models/entity';
import { EntityService } from '../../../core/services/entity.service';
import { ClrLoadingState } from '@clr/angular';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as EntityActions from '../../state/entity.actions';
import { ExtendedAppState } from '../../state/entity-state.interfaces';

@Component({
    selector: 'app-entity-list-page',
    templateUrl: './entity-list-page.component.html',
    styleUrls: ['./entity-list-page.component.scss'],
    providers: [EntityService],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityListPageComponent implements OnInit {
    newEntity: Entity = new Entity();

    entities$: Observable<Entity[]>;

    selectedEntity: Entity = new Entity();
    title: string;
    categoryList: any;

    refreshBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

    constructor(private store: Store<ExtendedAppState>) {}

    ngOnInit() {
        // Do NOT subscribe here because it uses an async pipe
        // This gets the initial values until the load is complete.
        // this.entities$ = this.store.pipe(select('entity')) as Observable<Entity[]>;

        this.entities$ = this.store.select(state => state.entity.entities) as Observable<Entity[]>;

        this.store.dispatch(new EntityActions.Load());
        // this.entities$ = this.store.pipe(select('entity')) as Observable<Entity[]>;

        // // Do NOT subscribe here because it used an async pipe
        // // this.errorMessage$ = this.store.pipe(select(fromProduct.getError));

        // // Subscribe here because it does not use an async pipe
        // this.store
        //     .pipe(
        //         select(fromProduct.getCurrentProduct),
        //         takeWhile(() => this.componentActive)
        //     )
        //     .subscribe(currentProduct => (this.selectedProduct = currentProduct));

        // // Subscribe here because it does not use an async pipe
        // this.store
        //     .pipe(
        //         select(fromProduct.getShowProductCode),
        //         takeWhile(() => this.componentActive)
        //     )
        //     .subscribe(showProductCode => (this.displayCode = showProductCode));

        // this.store
        //     .subscribe(showProductCode => (this.displayCode = showProductCode));
    }

    refreshEntityList() {
        // this.refreshBtnState = ClrLoadingState.LOADING;
        // this.getEntityList();
        this.store.dispatch(new EntityActions.Load());
    }

    // getEntityList() {
    //     this.entityService.getAllEntities().subscribe(entities => {
    //         this.entities = entities.map(x => {
    //             const newCategory = this.categoryList.find(c => c.value === x.category);
    //             if (newCategory) {
    //                 x.category = newCategory.label;
    //             }
    //             return x;
    //         });

    //         if (this.refreshBtnState === ClrLoadingState.LOADING) {
    //             this.refreshBtnState = ClrLoadingState.SUCCESS;
    //         }
    //     });
    // }

    deleteEntity = function(entity) {
        this.store.dispatch(new EntityActions.DeleteEntity(entity._id));
    };
}
