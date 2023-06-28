import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';

import { AddProductComponent } from './component/add-product/add-product.component';
import { AddAdminComponent } from './component/add-admin/add-admin.component';




@NgModule({
  declarations: [
    AddProductComponent,
    AddAdminComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesModule,
    ToastModule
  ]
})
export class AdminModule { }
