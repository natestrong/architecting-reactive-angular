import {Component, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {CreateCartItemAction, DeleteCartItemAction} from './actions/cart.actions'
import {IncrementCount} from './actions/count.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cart$: Observable<{ name: string, id: number }[]>
  counter$: Observable<number>
  newCartItem = ''

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.cart$ = this.store.select('cart')
    this.counter$ = this.store.select('counter')
  }

  onIncrement() {
    this.store.dispatch(new IncrementCount())
  }

  onSaveCartItem() {
    this.store.dispatch(new CreateCartItemAction(this.newCartItem))
    this.newCartItem = ''
  }

  onRemove(id) {
    this.store.dispatch(new DeleteCartItemAction(id))
  }

  onSelectItem(id: number) {

  }
}
