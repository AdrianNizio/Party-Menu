import { createAction, props } from '@ngrx/store';

export const toggleDetailedMode = createAction('[Global Settings] Toggle Detailed Mode', props<{ content: boolean }>());
