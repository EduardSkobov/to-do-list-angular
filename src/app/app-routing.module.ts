import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
      path: 'categories', 
      loadChildren: () => import('./modules/categories/categories.module')
        .then(m => m.CategoriesModule) },
  { 
      path: 'tasks', 
      loadChildren: () => import('./modules/tasks/tasks.module')
        .then(m => m.TasksModule) },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/