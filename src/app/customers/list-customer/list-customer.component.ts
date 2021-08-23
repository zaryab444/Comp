import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from 'src/app/models/customer.model';
import {Subscription} from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ParamMap, Router } from '@angular/router';




@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent  implements OnInit  {
  @Input() data: any;


  public dataSource = new MatTableDataSource<any>()
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  public displayedColumns: string[] = ['firstName', 'lastName', 'emailAddress','phoneNumber','dob','department', 'actions'];






  customerResult: any;
  customerList: any;
  customer: Customer = {} as Customer;

  constructor(private customerService: CustomerService, private router : Router){}


  ngOnInit(): void{

    if (this.data) {
      this.dataSource.data = this.data.partners;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    }

  this.getCustomerList();
  }


  getCustomerList(){
    this.customerService.getCustomers().subscribe((data:any[])=>{
      this.customerResult = data;

      this.customerList = this.customerResult.results;
      this.dataSource =this.customerList;
      this.dataSource.sort  = this.customerList;

      console.log(this.customerList);
    });

  }

  viewCustomer() {

    this.router.navigate(['/customers/edit/:id'])


  }








}
