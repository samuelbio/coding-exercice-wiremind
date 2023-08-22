import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { GithubIconComponent } from './icons/github-icon/github-icon.component';
import {MatChipsModule} from "@angular/material/chips";
import {MatBadgeModule} from "@angular/material/badge";
import {MatTabsModule} from "@angular/material/tabs";



@NgModule({
  declarations: [
    GithubIconComponent
  ],
  exports: [
    CommonModule,
    GithubIconComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatChipsModule,
    MatBadgeModule,
    MatTabsModule,
    MatCardModule,
  ]
})
export class MaterialUiModule { }
