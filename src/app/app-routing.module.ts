import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'search', pathMatch: 'full'
  },
  {
    path: 'search', loadChildren: async () => (await import('./pages/search/search.module')).SearchModule
  },
  {
    path: 'bookmarked', loadChildren: async () => (await import('./pages/bookmarked/bookmarked.module')).BookmarkedModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
