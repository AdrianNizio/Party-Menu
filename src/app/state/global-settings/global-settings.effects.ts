import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { AppState } from '../app.state';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class TodoEffects {
    dummyEffect$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType('dummy'),
                concatLatestFrom(() => this.store.select('dummySelector'))
            );
        },
        { dispatch: false }
    );

    constructor(private readonly actions$: Actions, private readonly store: Store<AppState>) {}
}
