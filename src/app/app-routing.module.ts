import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: '../pages/login/login.module#LoginPageModule',
    // loadChildren: () => import("../pages/login/login.module").then(m => m.LoginPageModule)
  },
  // {
  //   path: 'tabs',
  //   children: [
  //     {
  //       path: 'tab1',
  //       loadChildren: './tabs/tab1.module#Tab1PageModule'
  //       // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  //     },
  //   ]
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
