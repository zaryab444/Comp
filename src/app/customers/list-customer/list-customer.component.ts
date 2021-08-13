
import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent  implements AfterViewInit  {


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','email', 'address','department'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  email: string;
  address: string;
  department: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' , email:'aa',address:'abcs', department:'computer science'},
  {position: 2, name: 'Hyd', weight: 1.0079, symbol: 'H' , email:'aa',address:'abcs', department:'computer science'},
  {position: 3, name: 'Hydrog', weight: 1.0079, symbol: 'H' , email:'aa',address:'abcs', department:'computer science'},
  {position: 4, name: 'ogen', weight: 1.0079, symbol: 'H' , email:'aa',address:'abcs', department:'computer science'},
  {position: 5, name: 'Hydrogen', weight: 1.0079, symbol: 'H' , email:'aa',address:'abcs', department:'computer science'},
  {position: 6, name: 'Hydrogen', weight: 1.0079, symbol: 'H' , email:'aa',address:'abcs', department:'computer science'},
  {position: 7, name: 'Hydrogen', weight: 1.0079, symbol: 'H' , email:'aa',address:'abcs', department:'computer science'},
  {position: 8, name: 'Hydrogen', weight: 1.0079, symbol: 'H' , email:'aa',address:'abcs', department:'computer science'},
  {position: 9, name: 'Hgen', weight: 1.0079, symbol: 'H' , email:'aa',address:'abcs', department:'computer science'},

  {position: 10, name: 'Hydrogen', weight: 1.0079, symbol: 'H' , email:'aa',address:'abcs', department:'computer science'},
]



