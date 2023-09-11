import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//TODO: add new routs after new views are done
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'achievement-list',
    pathMatch: 'full'
  },
  {
    path: 'achievement-list',
    loadChildren: () => import('./achievement/achievement-list/achievement-list.module').then( m => m.AchievementListPageModule)
  },
  {
    path: 'achievement-details',
    loadChildren: () => import('./achievement/achievement-details/achievement-details.module').then( m => m.AchievementDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
