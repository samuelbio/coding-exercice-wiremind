import {GithubRepository} from "@core/models/github/githubRepository.model";
import {Action, createReducer, createSelector, on} from "@ngrx/store";
import * as GithubActions from "./github.actions";
import {AppState} from "@core/states";

export const initialBookmarked: GithubRepository[] = [];

const addBookmarked = (repositories: GithubRepository[], repository: GithubRepository): GithubRepository[] => {
  const findRepository = repositories.find((repo) => repo.id === repository.id);
  if (findRepository) {
    return repositories.filter(repo => repo.id !== repository.id);
  }
  return [...repositories, repository];
};

export interface BookmarkedState {
  bookmarked: GithubRepository[];
  repositorySelected: GithubRepository | null
}

export const initialState: BookmarkedState = {
  bookmarked: initialBookmarked,
  repositorySelected: null
}


const bookMarkedReducer = createReducer(initialState,
  on(GithubActions.ToggleBookmarked, (state: BookmarkedState, repository: GithubRepository) => ({
    bookmarked: addBookmarked(state.bookmarked, repository),
    repositorySelected: state.repositorySelected
  })),
  on(GithubActions.SetRepository, (state: BookmarkedState, repository: GithubRepository) => ({
    repositorySelected: repository,
    bookmarked: state.bookmarked
  }))
)

export const selectBookmarked = (state: AppState) => state;
export const getBookmarkedCount = createSelector(
  selectBookmarked,
  (state: AppState) => state.github.bookmarked.length
)
export const getBookmarkedList = createSelector(
  selectBookmarked,
  (state: AppState) => state.github.bookmarked
)

export const selectRepository = createSelector(
  selectBookmarked,
  (state: AppState) => state.github.repositorySelected
)

export function bookmarkedReducer(state: BookmarkedState | undefined, action: Action) {
  return bookMarkedReducer(state, action)
}
