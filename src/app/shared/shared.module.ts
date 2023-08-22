import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialUiModule} from "@shared/material-ui/material-ui.module";
import {HttpClientModule} from "@angular/common/http";
import {MomentModule} from "ngx-moment";
import { HeaderComponent } from './components/header/header.component';
import {RouterModule} from "@angular/router";
import {RepositoryCardComponent} from "@shared/components/repository-card/repository-card.component";
import { UserCardComponent } from './components/user-card/user-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    RepositoryCardComponent,
    UserCardComponent
  ],
  imports: [
    MaterialUiModule,
    RouterModule,
    MomentModule,
  ],
  exports: [
    CommonModule,
    MaterialUiModule,
    HttpClientModule,
    MomentModule,
    HeaderComponent,
    RepositoryCardComponent,
    UserCardComponent
  ]
})
export class SharedModule { }
