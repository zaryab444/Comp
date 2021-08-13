import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesComponent } from './invoices.component';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [InvoicesComponent],
  imports: [
    CommonModule,
    InvoicesRoutingModule,

  ]
})
export class InvoicesModule { }
