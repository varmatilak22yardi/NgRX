import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { GroceryService} from '../../grocery.service';
import { groceryAction } from '../actions/grocery.action';

@Injectable()
export class GroceryEffects {
  private actions$ = inject(Actions);
  private groceryService= inject(GroceryService);

  loadGroceries$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(groceryAction.loadGroceries

        ),
        exhaustMap(() => this.groceryService.fetchAllGroceries()
          .pipe(
            map((groceries:any) => (groceryAction.loadGroceriesSuccess(
              {
                payload:groceries
              }
            ))),
            catchError(() => of (
              groceryAction.loadGroceriesFailure()
            )
          )
          ))
    );
  });
}
/*
import { inject } from '@angular/core';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { GroceryService} from '../../grocery.service';
import { groceryAction} from '../actions/grocery.action';

export const loadGrocery= createEffect(
  (actions$ = inject(Actions), groceryService = inject(GroceryService)) => {
    return actions$.pipe(
      ofType(groceryAction.loadGroceries),
      exhaustMap(() =>groceryService.fetchAllGroceries()
      .pipe(
          map((groceries:any)=>(groceryAction.loadGroceriesSuccess({payload:groceries})
        ),
          catchError(() =>
            of(
              groceryAction.loadGroceriesFailure()
            ))
          )
        )
      )
    );
  },
  { functional: true }
);

export const displayErrorAlert = createEffect(
  () => {
    return inject(Actions).pipe(
      ofType(groceryAction.loadGroceriesFailure)
    );
  },
  { functional: true, dispatch: false }
);
*/
