import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {environment} from 'src/environments/environment'
import {AppComponent} from './app.component'
import {ActionReducerMap, StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {FormsModule} from '@angular/forms'
import {CartActionTypes, CartActionUnion} from './actions/cart.actions'
import {CountActionTypes, CountActionUnion} from './actions/count.actions'
import {IAppState} from './interfaces/IAppState'
import {UsersComponent} from './users/users.component'
import {CatsComponent} from './cats/cats.component'
import {RouterModule, Routes} from '@angular/router'
import {StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store'

const routes: Routes = [
  {path: 'cats', component: CatsComponent},
  {path: 'users', component: UsersComponent}
]

const counterReducer = (state = 0, action: CountActionUnion) => {
  switch (action.type) {
    case CountActionTypes.Increment:
      return state + 1
    default:
      return state
  }
}

const cartReducer = (state = [], action: CartActionUnion) => {
  switch (action.type) {
    case CartActionTypes.Create:
      return [...state, {id: state.length + 1, name: action.payload}]
    case CartActionTypes.Delete:
      return state.filter(item => item.id !== action.payload)
    default:
      return state
  }
}

export const reducers: ActionReducerMap<IAppState> = {
  cart: cartReducer,
  counter: counterReducer,
  router: routerReducer,
}

const actionSanitizer = (action, id) => {
  return {...action, payload: 'hiding the payload'}
}

const stateSanitizer = (state, index) => {
  return {...state, cart: ['showing obscured state']}
}

const devInstrument = {
  maxAge: 20,
  name: 'Dev Instance',
}

const prodInstrument = {
  maxAge: 20,
  name: 'Prod Instance',
  actionSanitizer,
  stateSanitizer
}

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CatsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(environment.production ? prodInstrument : devInstrument),
    StoreRouterConnectingModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
