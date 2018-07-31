import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, delay, tap } from 'rxjs/operators';

import { EntityService } from '../../core/services/entity.service';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as entityActions from './entity.actions';
import { Entity } from '../../core/models/entity';

@Injectable()
export class EntityEffects {
    constructor(private entityService: EntityService, private actions$: Actions, private router: Router) {}

    @Effect()
    loadEntities$: Observable<Action> = this.actions$.pipe(
        ofType(entityActions.EntityActionTypes.LOAD),
        mergeMap(action =>
            this.entityService.getAllEntities().pipe(
                delay(200), // just to see the spinner on the screen
                map(entities => new entityActions.LoadSuccess(entities)),
                catchError(err => of(new entityActions.LoadFail(err)))
            )
        )
    );

    @Effect()
    updateEntity$: Observable<Action> = this.actions$.pipe(
        ofType(entityActions.EntityActionTypes.UPDATE),
        map((action: entityActions.UpdateEntity) => action.payload),
        mergeMap((entity: Entity) =>
            this.entityService.updateEntity(entity).pipe(
                map(updatedEntity => new entityActions.UpdateEntitySuccess(updatedEntity)),
                catchError(err => of(new entityActions.UpdateEntityFail(err)))
            )
        )
    );

    @Effect()
    deleteEntity$: Observable<Action> = this.actions$.pipe(
        ofType(entityActions.EntityActionTypes.DELETE),
        map((action: entityActions.DeleteEntity) => action.payload),
        mergeMap((entityId: string) =>
            this.entityService.deleteEntityById(entityId).pipe(
                map(() => new entityActions.DeleteEntitySuccess(entityId)),
                catchError(err => of(new entityActions.DeleteEntityFail(err)))
            )
        )
    );

    // todo: refactor and move routing effects/actions to app level
    // implement "go", "forward" and "back"
    // help:
    // https://github.com/ngrx/platform/blob/master/docs/router-store/api.md#effects
    // https://github.com/amcdnl/ngrx-router + https://medium.com/@amcdnl/angular-routing-data-with-ngrx-effects-1cda1bd5e579
    // https://angular.schule/blog/2018-06-5-useful-effects-without-actions

    @Effect({ dispatch: false })
    goToEntity$: Observable<Action> = this.actions$.pipe(
        ofType(entityActions.EntityActionTypes.GO_TO_ENTITY),
        tap((action: entityActions.GoToEntity) => this.router.navigate(['/entities/' + action.payload]))
    );
}
