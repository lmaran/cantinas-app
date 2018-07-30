import { EntityActionTypes, EntityActions } from './entity.actions';
import { EntityState } from './entity.interfaces';

const initialState: EntityState = {
    currentEntityId: null,
    entities: [],
    loading: false,
    error: '',
};

export function reducer(state: EntityState = initialState, action: EntityActions): EntityState {
    switch (action.type) {
        case EntityActionTypes.LOAD:
            return {
                ...state,
                loading: true,
            };
        case EntityActionTypes.LOAD_SUCCESS:
            return {
                ...state,
                entities: action.payload,
                loading: false,
                error: '',
            };

        case EntityActionTypes.LOAD_FAIL:
            return {
                ...state,
                entities: [],
                loading: false,
                error: action.payload,
            };

        // case EntityActions.ADD_ENTITY:
        //     return [...state, action.payload];

        case EntityActionTypes.DELETE:
            return {
                ...state,
                entities: state.entities.filter(x => x._id !== action.payload),
                error: '',
            };

        // After a delete, the currentEntity is null.
        case EntityActionTypes.DELETE_SUCCESS:
            return {
                ...state,
                entities: state.entities.filter(x => x._id !== action.payload),
                currentEntityId: null,
                error: '',
            };

        case EntityActionTypes.DELETE_FAIL:
            return {
                ...state,
                error: action.payload,
            };

        // // const newState = state;
        // const newState = state.entities.filter(x => x._id !== action.payload);

        // return newState;
        default:
            return state;
    }
}
