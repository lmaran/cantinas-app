import * as fromRouter from '@ngrx/router-store';

// Representation of the entire app state
// Extended by lazy loaded modules
export interface AppState {
    router: fromRouter.RouterReducerState;
}
