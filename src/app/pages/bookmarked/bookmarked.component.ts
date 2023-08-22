import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {GithubRepository} from "@core/models/github/githubRepository.model";
import {select, Store} from "@ngrx/store";
import {AppState} from "@core/states";
import {getBookmarkedList} from "@core/states/bookmarked/github.reduce";

@Component({
  selector: 'app-bookmarked',
  templateUrl: './bookmarked.component.html',
  styles: [
  ]
})
export class BookmarkedComponent {
  bookmarkedRepository: Observable<GithubRepository[]>
  constructor(
    private store: Store<AppState>
  ) {
    this.bookmarkedRepository = store.pipe(select(getBookmarkedList))
  }
}
