import { Component, OnInit, ViewChild } from '@angular/core';
import { Entity } from '../../models/entity.model';
import { EntityService } from '../../services/entity.service';
import { AppModalComponent } from '../../../shared/components/confirmDelete/confirmDelete.component';
import { ClrLoadingState } from '@clr/angular';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../models/appState.model';
import * as EntityActions from '../../state/entity.actions';

@Component({
    selector: 'app-entity-list',
    templateUrl: './entity-list.component.html',
    styleUrls: ['./entity-list.component.scss'],
    providers: [EntityService],
})
export class EntityListComponent implements OnInit {
    newEntity: Entity = new Entity();

    // entities: Entity[] = [];
    entities$: Observable<Entity[]>;

    deleteModal = false;
    selectedEntity: Entity = new Entity();
    title: string;
    categoryList: any;

    refreshBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

    // Don't forget to add this (child) component in the current html
    @ViewChild(AppModalComponent) modal: AppModalComponent;

    constructor(private store: Store<AppState>, private entityService: EntityService) {}

    ngOnInit() {
        // this.entities = this.store.select('entity');

        // Do NOT subscribe here because it uses an async pipe
        // This gets the initial values until the load is complete.
        this.entities$ = this.store.pipe(select('entity')) as Observable<Entity[]>;

        // // Do NOT subscribe here because it used an async pipe
        // // this.errorMessage$ = this.store.pipe(select(fromProduct.getError));

        this.store.dispatch(new EntityActions.Load());

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

    // refreshEntityList() {
    //     this.refreshBtnState = ClrLoadingState.LOADING;
    //     this.getEntityList();
    // }

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
        this.modal.open(`${entity.displayName}`, () => {
            // this.entityService.deleteEntityById(entity._id).subscribe(res => {
            //     this.refreshEntityList();
            // });
            this.store.dispatch(new EntityActions.RemoveEntity(entity._id));
        });
    };
}
