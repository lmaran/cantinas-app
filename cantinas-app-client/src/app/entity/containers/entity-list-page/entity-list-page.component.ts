import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Entity } from '../../../core/models/entity';
import { ClrLoadingState } from '@clr/angular';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as EntityActions from '../../state/entity.actions';
import * as EntitySelectors from '../../state/entity.selectors';
import { ExtendedAppState } from '../../state/entity.interfaces';

@Component({
    selector: 'app-entity-list-page',
    templateUrl: './entity-list-page.component.html',
    styleUrls: ['./entity-list-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityListPageComponent implements OnInit {
    // newEntity: Entity = new Entity();

    entities$: Observable<Entity[]>;
    loading$: Observable<boolean>;

    // selectedEntity: Entity = new Entity();
    // title: string;
    // categoryList: any;

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

    editEntity = function(entity) {
        // un-comment below line as needed
        // this.store.dispatch(new EntityActions.SetCurrentEntityId(entity._id));

        // as navigation to another page is a side effect, I prefer to do that redirection inside as an "Effect"
        // this.router.navigate(['/entities', entity._id]);
        this.store.dispatch(new EntityActions.GoToEntity(entity._id));
    };
}
