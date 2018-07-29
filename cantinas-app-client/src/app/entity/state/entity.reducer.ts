import { Action } from '@ngrx/store';
import { Entity } from '../../core/models/entity';
import { EntityActionTypes, EntityActions } from './entity.actions';
import { State } from '../../core/models/app-state';

export interface State extends State {
    entity: EntityState;
}

// State for this feature (Entity)
export interface EntityState {
    // showProductCode: boolean;
    currentEntityId: string | null;
    entities: Entity[];
    error: string;
}

const initialState: EntityState = {
    // showProductCode: true,
    currentEntityId: null,
    entities: [],
    error: '',
};

// const initialState: Entity = null;

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
