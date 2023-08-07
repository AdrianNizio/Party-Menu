import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Injectable()
export class TodoEffects {
    constructor(private actions$: Actions, private store: Store<AppState>) {}

    dummyEffect$ = createEffect(
        () => {
            return this.actions$.pipe(ofType('dummy'), withLatestFrom(this.store.select('dummySelector')));
        },
        { dispatch: false }
    );
}
