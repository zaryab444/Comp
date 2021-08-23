import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';

import { CustomersComponent } from './customers.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';

const routes: Routes = [

  { path: '', component: ListCustomerComponent },
  { path: 'add', component: AddCustomerComponent },
  { path: 'edit/:id', component: EditCustomerComponent },
  { path: 'delete/:id', component: DeleteCustomerComponent },
  { path: 'search', component: SearchCustomerComponent },
  { path: 'view/:id', component: ViewCustomerComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
