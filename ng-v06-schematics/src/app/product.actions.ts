import { createAction, props } from '@ngrx/store';

export const loadProducts = createAction(
  '[Product] Load Products'
);

export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ data: any }>()
);

export const loadProductsFailure = createAction(
  '[Product] Load Products Failure',
  props<{ error: any }>()
);
