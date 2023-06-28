import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesModule,
    ToastModule,
    SharedModule
  ],
  exports: [
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ErrorComponent
  ]
})
export class CoreModule { }
