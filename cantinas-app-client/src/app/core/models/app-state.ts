import { Entity } from './entity';
import { EntityState } from '../../entity/state/entity.reducer';

export interface AppState {
    readonly entity: EntityState;
}
