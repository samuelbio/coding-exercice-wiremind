import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import {SharedModule} from "@shared/shared.module";
import { RepositoryDetailsComponent } from './components/repository-details/repository-details.component';
import { ReposirtoryListComponent } from './components/reposirtory-list/reposirtory-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommitersComponent } from './components/commiters/commiters.component';


@NgModule({
  declarations: [
    SearchComponent,
    RepositoryDetailsComponent,
    ReposirtoryListComponent,
    CommitersComponent,
  ],
    imports: [
      CommonModule,
      SearchRoutingModule,
      SharedModule,
      FormsModule,
      ReactiveFormsModule,
      ReactiveFormsModule
    ]
})
export class SearchModule { }
