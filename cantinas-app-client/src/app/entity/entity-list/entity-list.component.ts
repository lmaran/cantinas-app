import { Component, OnInit, ViewChild } from '@angular/core';
import { Entity } from '../../shared/interfaces/entity';
import { EntityService } from '../../shared/services/entity.service';
import { AppModalComponent } from '../../shared/components/confirmDelete/confirmDelete.component';
import { ClrLoadingState } from '@clr/angular';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as EntityActions from '../entity.actions';

@Component({
    selector: 'app-entity-list',
    templateUrl: './entity-list.component.html',
    styleUrls: ['./entity-list.component.scss'],
    providers: [EntityService],
})
export class EntityListComponent implements OnInit {
    newEntity: Entity = new Entity();

    // entities: Entity[] = [];
    entities: Observable<Entity[]>;

    deleteModal = false;
    selectedEntity: Entity = new Entity();
    title: string;
    categoryList: any;

    refreshBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

    // Don't forget to add this (child) component in the current html
    @ViewChild(AppModalComponent) modal: AppModalComponent;

    constructor(private store: Store<AppState>, private entityService: EntityService) {
        this.entities = store.select('entity');
    }

    ngOnInit() {
        // this.categoryList = [
        //     { label: '' },
        //     { value: '1', label: 'Supa' },
        //     { value: '2', label: 'Felul doi' },
        //     { value: '3', label: 'Salata' },
        //     { value: '4', label: 'Desert' },
        // ];
        // this.title = 'Entitati';
        // this.getEntityList();
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
