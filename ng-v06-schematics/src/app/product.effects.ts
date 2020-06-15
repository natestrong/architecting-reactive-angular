import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as ProductActions from './product.actions';



@Injectable()
export class ProductEffects {

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(ProductActions.loadProducts),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => ProductActions.loadProductsSuccess({ data })),
          catchError(error => of(ProductActions.loadProductsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
