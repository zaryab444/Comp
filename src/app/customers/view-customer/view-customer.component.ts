import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent implements OnInit {

  customerId: string = '';
  customerDetails : any;







  constructor(private activatedRoute: ActivatedRoute,
    private customerService: CustomerService) { }
//unsubscribe krna
  ngOnInit(): void {


    this.activatedRoute.params.subscribe(data =>{
          this.customerId = data.id;
    });

    this.customerService.viewCustomer(this.customerId).subscribe(data=>{
      this.customerDetails = data['results'];
      console.log(this.customerDetails);
    });


  }
}
