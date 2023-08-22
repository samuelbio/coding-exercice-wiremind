import {createAction, props} from "@ngrx/store";
import {GithubRepository} from "@core/models/github/githubRepository.model";

export enum GithubActionsTypes {
  ToggleBookmark = '[Github] toggle bookmark',
  SetRepository = '[Github] set repository',

}

export const ToggleBookmarked = createAction(GithubActionsTypes.ToggleBookmark, props<GithubRepository>());

export const SetRepository = createAction(GithubActionsTypes.SetRepository, props<GithubRepository>());
