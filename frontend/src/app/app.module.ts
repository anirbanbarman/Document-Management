import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { DocumentUploadComponent } from './components/document-upload/document-upload.component';
import { IngestionManagementComponent } from './components/ingestion-management/ingestion-management.component';
import { QnaInterfaceComponent } from './components/qna-interface/qna-interface.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './components/alert/alert.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    UserManagementComponent,
    DocumentUploadComponent,
    IngestionManagementComponent,
    QnaInterfaceComponent,
    AlertComponent,
    SidebarComponent,
    DashboardComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
