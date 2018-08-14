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
    error: '',
};

export function breadcrumbReducer(state: BreadcrumbState = initialState, action: BreadcrumbActions): BreadcrumbState {
    switch (action.type) {
        // get all
        case BreadcrumbActionTypes.GET_ALL:
            return {
                ...state,
                // currentEntityId: null,
                // loading: true,
            };
        case BreadcrumbActionTypes.GET_ALL_SUCCESS:
            return {
                ...state,
                breadcrumbItems: [...action.payload],
                // loading: false,
                error: '',
            };

        case BreadcrumbActionTypes.GET_ALL_FAIL:
            return {
                ...state,
                breadcrumbItems: [],
                // loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}
