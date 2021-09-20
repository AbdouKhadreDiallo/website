import { AccueilComponent } from './components/features/superAdmin/accueil/accueil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/features/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { DashComponent } from './components/features/superAdmin/dash/dash.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path: 'login', component: LoginComponent },
  {
    path: 'super_admins', component: AccueilComponent, canActivate:[AuthGuard], children: [
      {path:'', redirectTo:'super_admins/dash', pathMatch:'full'},
      {path:'dash', component:DashComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
