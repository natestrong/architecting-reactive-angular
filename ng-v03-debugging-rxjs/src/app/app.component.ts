import {Component, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  counter$: Observable<number>

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.counter$ = this.store.select('counter')
  }

  onIncrement() {
    this.store.dispatch({type: 'INCREMENT'})
  }
}
