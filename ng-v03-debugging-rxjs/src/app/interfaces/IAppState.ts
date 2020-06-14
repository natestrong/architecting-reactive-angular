import {ICartItem} from './ICartItem'

export interface IAppState {
  cart: ICartItem[]
  counter: number
  router: any
}
