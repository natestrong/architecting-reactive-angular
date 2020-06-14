import {Action} from '@ngrx/store'
import {ICartItem} from '../interfaces/ICartItem'

export enum CartActionTypes {
  Create = '[Cart] Create',
  Read = '[Cart] Read',
  Update = '[Cart] Update',
  Delete = '[Cart] Delete',
}

export class CreateCartItemAction implements Action {
  type: CartActionTypes.Create = CartActionTypes.Create

  constructor(public payload: string) {
  }
}

export class ReadCartItemAction implements Action {
  type: CartActionTypes.Read = CartActionTypes.Read
}

export class UpdateCartItemAction implements Action {
  type: CartActionTypes.Update = CartActionTypes.Update

  constructor(public payload: ICartItem) {
  }
}

export class DeleteCartItemAction implements Action {
  type: CartActionTypes.Delete = CartActionTypes.Delete

  constructor(public payload: number) {
  }
}

export type CartActionUnion = CreateCartItemAction | UpdateCartItemAction | DeleteCartItemAction | ReadCartItemAction
