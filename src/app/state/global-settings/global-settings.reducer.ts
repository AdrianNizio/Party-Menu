import { createReducer, on } from '@ngrx/store';

export interface GlobalSettingsState {
    detailedMode: boolean;
}

export const todoReducer = createReducer(
    // Supply the initial state
    initialState,
    // Add the new todo to the todos array
    on(addTodo, (state, { content }) => ({
        ...state,
        todos: [...state.todos, { content: content }],
    }))
);
