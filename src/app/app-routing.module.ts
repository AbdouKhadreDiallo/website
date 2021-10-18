import { DashboardComponent } from './components/features/admin/dashboard/dashboard.component';
import { AccueilComponent } from './components/features/superAdmin/accueil/accueil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/features/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { DashComponent } from './components/features/superAdmin/dash/dash.component';
import { AddAdminComponent } from './components/features/superAdmin/add-Admin/add-Admin.component';
import { AccueilAdminComponent } from './components/features/admin/accueil/accueil.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path: 'login', component: LoginComponent },
  {
    path: 'super_admins', component: AccueilComponent, canActivate:[AuthGuard], children: [
      {path:'', redirectTo:'/super_admins/dash', pathMatch:'full'},
      {path:'dash', component:DashComponent},
      {path:'add-admin', component:AddAdminComponent},
    ]
  },
  {
    path: 'admin', component: AccueilAdminComponent, canActivate:[AuthGuard], children: [
      { path:'', redirectTo:'/admin/dashboard', pathMatch:'full' },
      { path:'dashboard', component:DashboardComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
