import {Component} from '@angular/core';
import {GithubService} from "@core/services/githubApi/github.service";
import {first} from "rxjs";
import {Paginator} from "@core/models/github/paginator.model";
import {GithubRepository} from "@core/models/github/githubRepository.model";
import {FormControl, Validators} from "@angular/forms";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-reposirtory-list',
  templateUrl: './reposirtory-list.component.html',
  styles: [
  ]
})
export class ReposirtoryListComponent {
  pageIndex = 0;
  repositoryData?: Paginator<GithubRepository>;

  searchText: FormControl = new FormControl<string>('', [Validators.required]);

  constructor(
    private githubService: GithubService,
  ) {
  }
  public onChangePage(pageEvent: PageEvent) {
    this.githubService.searchRepositoryByText(this.searchText.value, pageEvent)
      .pipe(first()).subscribe((result: Paginator<GithubRepository>) => {
      this.repositoryData = result;
    })
  }

  public onSearch() {
    this.githubService.searchRepositoryByText(this.searchText.value)
      .pipe(first()).subscribe((result: Paginator<GithubRepository>) => {
        this.repositoryData = result;
    })
  }


}
