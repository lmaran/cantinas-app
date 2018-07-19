import { Action } from '@ngrx/store';
import { Entity } from '../../core/models/entity';
import * as EntityActions from './entity.actions';

const initialState: Entity = {
    _id: '123',
    name: 'asd',
    displayName: 'Initial Tutorial',
    url: 'http://google.com',
};

// const initialState: Entity = null;

export function reducer(state: Entity[] = [initialState], action: EntityActions.Actions) {
    switch (action.type) {
        case EntityActions.LOAD_SUCCESS:
            return action.payload;

        case EntityActions.ADD_ENTITY:
            return [...state, action.payload];

        case EntityActions.REMOVE_ENTITY:
            // state.splice(action.payload, 1);

            console.log(state);
            console.log('Id:' + action.payload);

            const newState = state.filter(x => x._id !== action.payload);
            console.log(newState);
            return newState;
        default:
            return state;
    }
}
