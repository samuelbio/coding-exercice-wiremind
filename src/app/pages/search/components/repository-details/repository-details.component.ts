import { Component } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppState} from "@core/states";
import {Observable} from "rxjs";
import {GithubRepository} from "@core/models/github/githubRepository.model";
import {ToggleBookmarked} from "@core/states/bookmarked/github.actions";
import {selectRepository} from "@core/states/bookmarked/github.reduce";
import {GithubService} from "@core/services/githubApi/github.service";
import {Paginator} from "@core/models/github/paginator.model";
import {GithubCommiter} from "@core/models/github/githubCommiter.model";

@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styles: [
  ]
})
export class RepositoryDetailsComponent {

  repositorySelected$: Observable<GithubRepository | null> = this.store.pipe(select(selectRepository))
  constructor(
    private store: Store<AppState>
  ) {}

  onBoomarked(repository: GithubRepository): void {
    this.store.dispatch(ToggleBookmarked(repository))
  }
}
