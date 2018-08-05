import { EntityActionTypes, EntityActions } from './entity.actions';
import { EntityState } from './entity.interfaces';
import { Entity } from '../../core/models/entity';

const initialState: EntityState = {
    currentEntityId: null,
    entities: {},
    loading: false,
    error: '',
};

export function reducer(state: EntityState = initialState, action: EntityActions): EntityState {
    switch (action.type) {
        case EntityActionTypes.GET_ALL:
            return {
                ...state,
                currentEntityId: null,
                loading: true,
            };
        case EntityActionTypes.GET_ALL_SUCCESS:
            const entities = <Entity[]>action.payload;
            return {
                ...state,
                entities: entities.reduce((obj: { [id: string]: Entity }, item: Entity) => {
                    obj[item._id] = item;
                    return obj;
                }, {}),
                loading: false,
                error: '',
            };

        case EntityActionTypes.GET_ALL_FAIL:
            return {
                ...state,
                entities: {},
                loading: false,
                error: action.payload,
            };

        case EntityActionTypes.GET_ONE:
            const id2 = <string>action.payload;
            return {
                ...state,
                currentEntityId: id2,
                loading: false,
                error: '',
            };

        case EntityActionTypes.GET_ONE_SUCCESS:
            const entity = <Entity>action.payload;
            return {
                ...state,
                currentEntityId: entity._id,
                entities: {
                    ...state.entities,
                    [entity._id]: entity,
                },
                loading: false,
                error: '',
            };

        case EntityActionTypes.GET_ONE_FAIL:
            return {
                ...state,
                entities: {},
                loading: false,
                error: action.payload,
            };
        // case EntityActions.ADD_ENTITY:
        //     return [...state, action.payload];

        case EntityActionTypes.DELETE:
            // https://coderwall.com/p/xrssxg/immutable-way-to-delete-a-key-from-an-object
            // https://stackoverflow.com/a/47227198/2726725
            const id = action.payload;
            const { [id]: deleted, ...newEntities } = state.entities;
            return {
                ...state,
                // entities: state.entities.filter(x => x._id !== action.payload),
                entities: newEntities,
                error: '',
            };

        // After a delete, the currentEntity is null.
        case EntityActionTypes.DELETE_SUCCESS:
            return {
                ...state,
                entities: newEntities,
                currentEntityId: null,
                error: '',
            };

        case EntityActionTypes.DELETE_FAIL:
            return {
                ...state,
                error: action.payload,
            };

        case EntityActionTypes.SET_CURRENT_ENTITY_ID: {
            return {
                ...state,
                currentEntityId: action.payload,
            };
        }

        // // const newState = state;
        // const newState = state.entities.filter(x => x._id !== action.payload);

        // return newState;
        default:
            return state;
    }
}
