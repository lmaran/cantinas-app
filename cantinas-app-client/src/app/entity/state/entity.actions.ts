import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Entity } from '../models/entity.model';

export const ADD_ENTITY = '[ENTITY] Add';
export const REMOVE_ENTITY = '[ENTITY] Remove';
export const LOAD = '[Product] Load';
export const LOAD_SUCCESS = '[Product] Load Success';
export const LOAD_FAIL = '[Product] Load Fail';

export class AddEntity implements Action {
    readonly type = ADD_ENTITY;

    constructor(public payload: Entity) {}
}

export class RemoveEntity implements Action {
    readonly type = REMOVE_ENTITY;

    constructor(public payload: string) {}
}

export class Load implements Action {
    readonly type = LOAD;
}

export class LoadSuccess implements Action {
    readonly type = LOAD_SUCCESS;

    constructor(public payload: Entity[]) {}
}

export class LoadFail implements Action {
    readonly type = LOAD_FAIL;

    constructor(public payload: string) {}
}

export type Actions = AddEntity | RemoveEntity | Load | LoadSuccess | LoadFail;
