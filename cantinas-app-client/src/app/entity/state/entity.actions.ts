import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Entity } from '../../core/models/entity';

export enum EntityActionTypes {
    SetCurrentEntity = '[Entity] Set Current Entity',

    InitializeCurrentEntity = '[Entity] Initialize Current Entity',

    // LOAD_ALL = '[Entity] Load All',
    // LOAD_ALL_SUCCESS = '[Entity] Load All Success',
    // LOAD_ALL_FAIL = '[Entity] Load All Fail',

    LOAD = '[Entity] Load',
    LOAD_SUCCESS = '[Entity] Load Success',
    LOAD_FAIL = '[Entity] Load Fail',

    UPDATE = '[Entity] Update',
    UPDATE_SUCCESS = '[Entity] Update Success',
    UPDATE_FAIL = '[Entity] Update Fail',

    CREATE = '[Entity] Create',
    CREATE_SUCCESS = '[Entity] Create Success',
    CREATE_FAIL = '[Entity] Create Fail',

    DELETE = '[Entity] Delete',
    DELETE_SUCCESS = '[Entity] Delete Success',
    DELETE_FAIL = '[Entity] Delete Fail',
}

// export const ADD_ENTITY = '[ENTITY] Add';

// export const UPDATE_ENTITY = '[ENTITY] Update';
// export const UPDATE_ENTITY_SUCCESS = '[ENTITY] Update Success';
// export const UPDATE_ENTITY_FAIL = '[ENTITY] Update Fail';

// export const REMOVE_ENTITY = '[ENTITY] Remove';

// export const LOAD = '[Product] Load';
// export const LOAD_SUCCESS = '[Product] Load Success';
// export const LOAD_FAIL = '[Product] Load Fail';

// export class AddEntity implements Action {
//     readonly type = ADD_ENTITY;

//     constructor(public payload: Entity) {}
// }

// update
export class UpdateEntity implements Action {
    readonly type = EntityActionTypes.UPDATE;

    constructor(public payload: Entity) {}
}

// update
export class UpdateEntitySuccess implements Action {
    readonly type = EntityActionTypes.UPDATE_SUCCESS;

    constructor(public payload: Entity) {}
}

export class UpdateEntityFail implements Action {
    readonly type = EntityActionTypes.UPDATE_FAIL;

    constructor(public payload: string) {}
}

export class DeleteEntity implements Action {
    readonly type = EntityActionTypes.DELETE;

    constructor(public payload: string) {}
}

// load
export class Load implements Action {
    readonly type = EntityActionTypes.LOAD;
}

export class LoadSuccess implements Action {
    readonly type = EntityActionTypes.LOAD_SUCCESS;

    constructor(public payload: Entity[]) {}
}

export class LoadFail implements Action {
    readonly type = EntityActionTypes.LOAD_SUCCESS;

    constructor(public payload: any) {}
}

export type EntityActions = DeleteEntity | Load | LoadSuccess | LoadFail;
