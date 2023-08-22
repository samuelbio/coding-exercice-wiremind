import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from "./search.component";
import {ReposirtoryListComponent} from "./components/reposirtory-list/reposirtory-list.component";
import {RepositoryDetailsComponent} from "./components/repository-details/repository-details.component";

const routes: Routes = [{
  path: '', component: SearchComponent,
  children: [
    {
      path: '', component: ReposirtoryListComponent
    },
    {
      path: 'details/:id', component: RepositoryDetailsComponent
    },
    {
      path: 'bookmarked', component: RepositoryDetailsComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
