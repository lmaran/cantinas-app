import { ActionReducerMap, createSelector, createFeatureSelector, ActionReducer, MetaReducer } from '@ngrx/store';
// import { environment } from '../../environments/environment';
import * as fromRouter from '@ngrx/router-store';

export interface State {
    // layout: fromLayout.State;
    router: fromRouter.RouterReducerState;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<State> = {
    // layout: fromLayout.reducer,
    router: fromRouter.routerReducer,
};
