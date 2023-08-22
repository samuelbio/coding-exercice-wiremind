
import * as fromProjects from './bookmarked/github.reduce';
import {ActionReducerMap} from "@ngrx/store";

export interface AppState {
  github: fromProjects.BookmarkedState;
}

export const reducers: ActionReducerMap<AppState> = {
  github: fromProjects.bookmarkedReducer
};
