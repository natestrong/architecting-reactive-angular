import {Component, OnInit} from '@angular/core'
import {select, Store} from '@ngrx/store'
import {AppState} from '../app-state'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store
      .pipe(
        select(state => state.products))
      .subscribe(data => console.log('products:', data))
  }

}
