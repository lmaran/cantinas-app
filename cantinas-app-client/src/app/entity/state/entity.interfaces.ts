import { AppState } from '../../core/state/app-state';
import { Entity } from '../../core/models/entity';

// Extends the app state to include the entity feature.
// This is required because entities are lazy loaded.
// So the reference to EntityState cannot be added to app-state.ts directly.
export interface ExtendedAppState extends AppState {
    entity: EntityState;
}

// State for this feature (Entity)
export interface EntityState {
    currentEntityId: string | null;
    entities: Entity[];
    error: string;
}
