import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {environment} from 'src/environments/environment'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {FormsModule} from '@angular/forms'

const counterReducer = (state = 0, action) => {
  console.log(action)
  switch (action.type) {
    case '[Counter] increment':
      return state + 1
    default:
      return state
  }
}

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case '[Cart] add':
      return [...state, {...action.payload}]
    case '[Cart] remove':
      return state.filter(item => item.id !== action.payload)
    default:
      return state
  }
}

const actionSanitizer = (action, id) => {
  return {...action, payload: 'hiding the payload'}
}

const stateSanitizer = (state, index) => {
  return {...state, cart: ['showing obscured state']}
}

const devInstrument = {
  maxAge: 520,
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
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      counter: counterReducer,
      cart: cartReducer
    }),
    StoreDevtoolsModule.instrument(
      environment.production ?
        prodInstrument :
        devInstrument
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
