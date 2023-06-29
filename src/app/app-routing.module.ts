import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './core/components/signup/signup.component';
import { LoginComponent } from './core/components/login/login.component';
import { HomeComponent } from './core/components/home/home.component';
import { AuthGuard } from './shared/services/auth.guard';
import { AdminGuard } from './shared/services/admin.guard';
import { ErrorComponent } from './core/components/error/error.component';
import { AddAdminComponent } from './admin/component/add-admin/add-admin.component';
import { AddProductComponent } from './admin/component/add-product/add-product.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'addAdmin', component: AddAdminComponent, canActivate: [AdminGuard]},
  { path: 'addProduct', component: AddProductComponent},
  { path: '**', component: ErrorComponent },
];

// canActivate: [AuthGuard]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
