import {Component, Input} from '@angular/core';
import {GithubRepository} from "@core/models/github/githubRepository.model";
import {Store} from "@ngrx/store";
import {AppState} from "@core/states";
import {SetRepository, ToggleBookmarked} from "@core/states/bookmarked/github.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-repository-card',
  templateUrl: './repository-card.component.html',
  styles: [
  ]
})
export class RepositoryCardComponent {

  @Input()
  repository!: GithubRepository;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
  }

  public onBoomarked(repository: GithubRepository): void {
    this.store.dispatch(ToggleBookmarked(repository))
  }
  public viewDetails(repository: GithubRepository): void {
    this.router.navigate(['search/details', repository.id])
    this.store.dispatch(SetRepository(repository))
  }
}
