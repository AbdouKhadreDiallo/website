import { AccueilAdminComponent } from './components/features/admin/accueil/accueil.component';
import { SharedService } from 'src/app/services/shared/shared.service';
import { AuthGuard } from './services/auth.guard';
import { LoginService } from './services/login/login.service';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/features/login/login.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { AccueilComponent } from './components/features/superAdmin/accueil/accueil.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { DashComponent } from './components/features/superAdmin/dash/dash.component';
import { ListMagasinComponent } from './components/features/superAdmin/list-magasin/list-magasin.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ListSuperAdminComponent } from './components/features/superAdmin/list-super-admin/list-super-admin.component';
import { AddAdminComponent } from './components/features/superAdmin/add-Admin/add-Admin.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DashboardComponent } from './components/features/admin/dashboard/dashboard.component';
import { InventaireComponent } from './components/features/admin/inventaire/inventaire.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilComponent,
    HeaderComponent,
    DashComponent,
    ListMagasinComponent,
    ListSuperAdminComponent,
    AddAdminComponent,
    DashboardComponent,
    AccueilAdminComponent,
    InventaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
		ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
    SweetAlert2Module,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
