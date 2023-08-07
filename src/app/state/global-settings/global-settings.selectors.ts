import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { GlobalSettingsState } from './global-settings.reducer';

export const selectTodos = (state: AppState) => state.globalSettings;
export const selectAllTodos = createSelector(selectTodos, (state: GlobalSettingsState) => state.detailedMode);
