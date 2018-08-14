import { BreadcrumbActionTypes, BreadcrumbActions } from './breadcrumb.actions';
import { BreadcrumbState } from './breadcrumb-state.interfaces';

const initialState: BreadcrumbState = {
    breadcrumbItems: [
        {
            name: 'Comenzi',
            url: '/entities',
        },
        {
            name: 'Comanda: 28 Nov 2017',
            url: '/entities/123',
        },
        {
            name: 'Andor Ovidiu',
            url: '/entities',
        },
    ],
};

export function breadcrumbReducer(state: BreadcrumbState = initialState, action: BreadcrumbActions): BreadcrumbState {
    switch (action.type) {
        case BreadcrumbActionTypes.GET_BREADCRUMB:
            return {
                ...state,
            };
        case BreadcrumbActionTypes.SET_BREADCRUMB:
            return {
                ...state,
                breadcrumbItems: [...action.payload],
            };

        default:
            return state;
    }
}
