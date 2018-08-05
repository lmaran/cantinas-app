import * as fromRouter from '@ngrx/router-store';

export interface RouteState {
    path: string;
}
export interface AppState {
    router: fromRouter.RouterReducerState;
}
