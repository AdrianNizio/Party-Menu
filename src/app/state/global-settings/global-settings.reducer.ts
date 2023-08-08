import { createReducer, on } from '@ngrx/store';
import { toggleDetailedMode } from './global-settings.actions';

export interface GlobalSettingsState {
    detailedMode: boolean;
}

export const initialState: GlobalSettingsState = {
    detailedMode: false,
};

export const todoReducer = createReducer(
    // Supply the initial state
    initialState,
    // Add the new todo to the todos array
    on(
        toggleDetailedMode,
        (state, { content }): GlobalSettingsState => ({
            ...state,
            detailedMode: [...state.detailedMode, { content: content }],
        })
    )
);
