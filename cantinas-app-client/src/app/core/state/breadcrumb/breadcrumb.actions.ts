import { Action } from '@ngrx/store';
import { BreadcrumbItem } from '../../interfaces/breadcrumb-item.interface';

export enum BreadcrumbActionTypes {
    // SetCurrentEntity = '[Entity] Set Current Entity',

    InitializeCurrentEntity = '[Entity] Initialize Current Breadcrumb',

    GET_ALL = '[Breadcrumb] Get All',
    GET_ALL_SUCCESS = '[Breadcrumb] Get All Success',
    GET_ALL_FAIL = '[Breadcrumb] Get All Fail',

    GET_ONE = '[Entity] Get One',
    GET_ONE_SUCCESS = '[Entity] Get One Success',
    GET_ONE_FAIL = '[Entity] Get One Fail',

    UPDATE = '[Entity] Update',
    UPDATE_SUCCESS = '[Entity] Update Success',
    UPDATE_FAIL = '[Entity] Update Fail',

    CREATE = '[Entity] Create',
    CREATE_SUCCESS = '[Entity] Create Success',
    CREATE_FAIL = '[Entity] Create Fail',

    DELETE = '[Entity] Delete',
    DELETE_SUCCESS = '[Entity] Delete Success',
    DELETE_FAIL = '[Entity] Delete Fail',

    SET_CURRENT_ENTITY_ID = '[Entity] Set current Id',
}

// load all
export class GetAll implements Action {
    readonly type = BreadcrumbActionTypes.GET_ALL;
}

export class GetAllSuccess implements Action {
    readonly type = BreadcrumbActionTypes.GET_ALL_SUCCESS;

    constructor(public payload: BreadcrumbItem[]) {}
}

export class GetAllFail implements Action {
    readonly type = BreadcrumbActionTypes.GET_ALL_FAIL;

    constructor(public payload: any) {}
}

export type BreadcrumbActions = GetAll | GetAllSuccess | GetAllFail;
