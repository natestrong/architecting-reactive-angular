import {Component, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cart$: Observable<{ name: string, id: number }[]>
  counter$: Observable<number>
  id = 1
  newCartItem = ''

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.cart$ = this.store.select('cart')
    this.counter$ = this.store.select('counter')
  }

  onIncrement() {
    this.store.dispatch({type: '[Counter] increment'})
  }

  onSaveCartItem() {
    this.store.dispatch({
      type: '[Cart] add',
      payload: {
        name: this.newCartItem, id: this.id
      }
    })
    this.id++
    this.newCartItem = ''
  }

  onRemove(id) {
    this.store.dispatch({
      type: '[Cart] remove',
      payload: id
    })
  }
}
