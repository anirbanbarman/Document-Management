import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { DocumentUploadComponent } from './components/document-upload/document-upload.component';
import { IngestionManagementComponent } from './components/ingestion-management/ingestion-management.component';
import { QnaInterfaceComponent } from './components/qna-interface/qna-interface.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,children:[
    { path: 'user-management', component: UserManagementComponent, canActivate: [AdminGuard] },
    { path: 'document-upload', component: DocumentUploadComponent, canActivate: [AuthGuard] },
    { path: 'ingestion-management', component: IngestionManagementComponent, canActivate: [AuthGuard] },
    { path: 'qna-interface', component: QnaInterfaceComponent, canActivate: [AuthGuard] },
    { path: '', component: HomeComponent },
  

  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
