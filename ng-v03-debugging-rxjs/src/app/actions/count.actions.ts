import {Action} from '@ngrx/store'

export enum CountActionTypes {
  Increment = '[Count] Increment'
}

export class IncrementCount implements Action {
  type: CountActionTypes.Increment = CountActionTypes.Increment
}

export type CountActionUnion = IncrementCount
