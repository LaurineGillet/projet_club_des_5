import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterModule } from 'src/pages/register/register.module';
import { RegisterComponent } from 'src/pages/register/register.component';
import { FormRegisterLayoutComponent } from 'src/pages/register/forms-register-layout/form-register-layout.component.';
import { FormRegisterLayoutModule } from 'src/pages/register/forms-register-layout/form-register-layout.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: '../pages/login/login.module#LoginPageModule',
    // loadChildren: () => import("../pages/login/login.module").then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'register/form',
    component: FormRegisterLayoutComponent
  }
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
    RouterModule.forRoot(routes),
    RegisterModule,
    FormRegisterLayoutModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
