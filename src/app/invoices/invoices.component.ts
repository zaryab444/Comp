import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  public form :FormGroup;
  constructor(private fb: FormBuilder) { }

    ngOnInit() {

      this.form = this.fb.group({
        creditCard: [],
        creditCardDate: [],
        creditCardCvv: [],
      });
}
}
