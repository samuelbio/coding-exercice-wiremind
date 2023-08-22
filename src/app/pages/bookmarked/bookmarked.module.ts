import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarkedRoutingModule } from './bookmarked-routing.module';
import { BookmarkedComponent } from './bookmarked.component';
import {SharedModule} from "@shared/shared.module";


@NgModule({
  declarations: [
    BookmarkedComponent
  ],
  imports: [
    CommonModule,
    BookmarkedRoutingModule,
    SharedModule
  ]
})
export class BookmarkedModule { }
