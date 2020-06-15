import {State as ProductsState} from './products/products.reducer'

export interface AppState {
  counter
  products: ProductsState
}
