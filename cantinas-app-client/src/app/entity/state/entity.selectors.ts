import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState } from './entity.interfaces';

// Selector functions
const getEntityFeatureState = createFeatureSelector<EntityState>('entity');

// export const getShowProductCode = createSelector(
//     getProductFeatureState,
//     state => state.showProductCode
// );

// export const getCurrentProductId = createSelector(
//     getProductFeatureState,
//     state => state.currentProductId
// );

// export const getCurrentProduct = createSelector(
//     getProductFeatureState,
//     getCurrentProductId,
//     (state, currentProductId) => {
//         if (currentProductId === 0) {
//             return {
//                 id: 0,
//                 productName: '',
//                 productCode: 'New',
//                 description: '',
//                 starRating: 0
//             };
//         } else {
//             return currentProductId ? state.products.find(p => p.id === currentProductId) : null;
//         }
//     }
// );

export const getEntities = createSelector(getEntityFeatureState, state => state.entities);

export const getError = createSelector(getEntityFeatureState, state => state.error);
