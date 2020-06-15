import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {ActionReducer, MetaReducer, StoreModule} from '@ngrx/store'
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {HomeComponent} from './home/home.component'
import {ProductsComponent} from './products/products.component'
import {ProductDetailComponent} from './product-detail/product-detail.component'
import {localStorageSync} from 'ngrx-store-localstorage'

const counterReducer = (state = 0, action) => {
  switch (action) {
    case 'INCREMENT':
      return state + 1
    default:
      return state
  }
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({keys: ['router', 'counter']})(reducer)
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      counter: counterReducer,
      router: routerReducer
    }, {metaReducers}),
    StoreDevtoolsModule.instrument({
      maxAge: 20
    }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
