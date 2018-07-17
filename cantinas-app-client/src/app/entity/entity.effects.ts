import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { EntityService } from '../shared/services/entity.service';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as entityActions from './entity.actions';

@Injectable()
export class EntityEffects {
    constructor(private entityService: EntityService, private actions$: Actions) {}

    @Effect()
    loadEntities$: Observable<Action> = this.actions$.pipe(
        ofType(entityActions.LOAD),
        mergeMap(action =>
            this.entityService.getAllEntities().pipe(
                map(entities => new entityActions.LoadSuccess(entities)),
                catchError(err => of(new entityActions.LoadFail(err)))
            )
        )
    );
}
