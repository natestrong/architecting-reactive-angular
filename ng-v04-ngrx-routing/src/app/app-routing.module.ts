import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {AppComponent} from './app.component'
import {ProductsComponent} from './products/products.component'
import {ProductDetailComponent} from './product-detail/product-detail.component'
import {HomeComponent} from './home/home.component'


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
