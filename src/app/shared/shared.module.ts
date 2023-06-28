import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductCardComponent,
    ButtonComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    ButtonComponent,
    ProductCardComponent,
    NavbarComponent
  ],

  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class SharedModule { }
