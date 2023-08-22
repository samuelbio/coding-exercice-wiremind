import {Component, Input, OnInit} from '@angular/core';
import {GithubService} from "@core/services/githubApi/github.service";
import {PageEvent} from "@angular/material/paginator";
import {Observable} from "rxjs";
import {Paginator} from "@core/models/github/paginator.model";
import {GithubCommiter} from "@core/models/github/githubCommiter.model";

@Component({
  selector: 'app-commiters',
  templateUrl: './commiters.component.html',
  styles: [
  ]
})
export class CommitersComponent implements OnInit {

  @Input()
  url?: string;

  commiters$?: Observable<Paginator<GithubCommiter | null>>

  constructor(
    private githubService: GithubService,
  ) {}

  ngOnInit() {
    if (this.url) {
      this.commiters$ = this.githubService.getDataFromUrl<GithubCommiter>(this.url);
    }
  }

  public onChangePage(pageEvent: PageEvent) {
    if (this.url) {
      this.commiters$ = this.githubService.getDataFromUrl<GithubCommiter>(this.url, pageEvent);
    }
  }
}
