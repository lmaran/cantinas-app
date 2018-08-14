import { Action } from '@ngrx/store';
import { BreadcrumbItem } from '../../interfaces/breadcrumb-item.interface';

export enum BreadcrumbActionTypes {
    GET_BREADCRUMB = '[Breadcrumb] Get Breadcrumb',
    SET_BREADCRUMB = '[Breadcrumb] Set Breadcrumb',
}

export class GetBreadcrumb implements Action {
    readonly type = BreadcrumbActionTypes.GET_BREADCRUMB;
}

export class SetBreadcrumb implements Action {
    readonly type = BreadcrumbActionTypes.SET_BREADCRUMB;

    constructor(public payload: BreadcrumbItem[]) {}
}

export type BreadcrumbActions = GetBreadcrumb | SetBreadcrumb;
