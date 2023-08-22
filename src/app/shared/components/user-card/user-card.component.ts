import {Component, Input} from '@angular/core';
import {GithubCommiter} from "@core/models/github/githubCommiter.model";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styles: [
  ]
})
export class UserCardComponent {
  @Input()
  user?: GithubCommiter;
}
