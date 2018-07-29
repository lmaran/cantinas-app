import { EntityActionTypes, EntityActions } from './entity.actions';
import { EntityState } from './entity.interfaces';

const initialState: EntityState = {
    currentEntityId: null,
    entities: [],
    error: '',
};

export function reducer(state: EntityState = initialState, action: EntityActions): EntityState {
    switch (action.type) {
        case EntityActionTypes.LOAD_SUCCESS:
            return {
                ...state,
                entities: action.payload,
                error: '',
            };

        // case EntityActions.ADD_ENTITY:
        //     return [...state, action.payload];

        case EntityActionTypes.DELETE:
            const yyy = action.payload;

            const newState = state;
            // const newState = state.filter(x => x._id !== action.payload);

            return newState;
        default:
            return state;
    }
}
