import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoansTypesComponent } from './loans-types.component';

const routes: Routes = [{ path: '', component: LoansTypesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoansTypesRoutingModule { }
