import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Entity } from '../shared/interfaces/entity';

export const ADD_ENTITY = '[ENTITY] Add';
export const REMOVE_ENTITY = '[ENTITY] Remove';

export class AddEntity implements Action {
    readonly type = ADD_ENTITY;

    constructor(public payload: Entity) {}
}

export class RemoveEntity implements Action {
    readonly type = REMOVE_ENTITY;

    constructor(public payload: string) {}
}

export type Actions = AddEntity | RemoveEntity;
