import { Component } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppState} from "@core/states";
import {Observable} from "rxjs";
import {getBookmarkedCount} from "@core/states/bookmarked/github.reduce";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {

  bookmarkedCount$: Observable<number>;
  constructor(
    private store: Store<AppState>
  ) {
    this.bookmarkedCount$ = store.pipe(select(getBookmarkedCount))
  }
}
