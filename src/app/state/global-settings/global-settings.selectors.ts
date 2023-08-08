import { AppState } from '../app.state';
import { GlobalSettingsState } from './global-settings.reducer';
import { createSelector } from '@ngrx/store';

export const selectTodos = (state: AppState): GlobalSettingsState => state.globalSettings;
export const selectAllTodos = createSelector(selectTodos, (state: GlobalSettingsState) => state.detailedMode);
