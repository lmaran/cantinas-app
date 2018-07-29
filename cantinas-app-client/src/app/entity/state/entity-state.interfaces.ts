import { AppState } from '../../core/state/app-state';
import { Entity } from '../../core/models/entity';

export interface ExtendedAppState extends AppState {
    entity: EntityState;
}

// State for this feature (Entity)
export interface EntityState {
    currentEntityId: string | null;
    entities: Entity[];
    error: string;
}
