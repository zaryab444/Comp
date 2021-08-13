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





@NgModule({
  declarations: [CustomersComponent, ListCustomerComponent, AddCustomerComponent, EditCustomerComponent, DeleteCustomerComponent, SearchCustomerComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule

  ]
})
export class CustomersModule { }
