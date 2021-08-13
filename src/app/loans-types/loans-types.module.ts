import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansTypesRoutingModule } from './loans-types-routing.module';
import { LoansTypesComponent } from './loans-types.component';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [LoansTypesComponent],
  imports: [
    CommonModule,
    LoansTypesRoutingModule,
    MatFormFieldModule

  ]
})
export class LoansTypesModule { }
