import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { ViewCustomerComponent } from './view-customer/view-customer.component';







@NgModule({
  declarations: [CustomersComponent, ListCustomerComponent, AddCustomerComponent, EditCustomerComponent, DeleteCustomerComponent, SearchCustomerComponent, ViewCustomerComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule

  ]
})
export class CustomersModule { }
