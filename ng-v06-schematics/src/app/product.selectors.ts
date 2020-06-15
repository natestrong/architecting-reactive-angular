import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProduct from './product.reducer';

export const selectProductState = createFeatureSelector<fromProduct.State>(
  fromProduct.productFeatureKey
);
