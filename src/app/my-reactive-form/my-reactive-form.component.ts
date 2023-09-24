import { Component } from '@angular/core';
import { Order } from '../models/order';
import { FormArray, FormBuilder, Validator, Validators } from '@angular/forms';
import { MinDateValidator } from '../services/min-date-validator.service';


@Component({
  selector: 'app-my-reactive-form',
  templateUrl: './my-reactive-form.component.html',
  styleUrls: ['./my-reactive-form.component.css']
})
export class MyReactiveFormComponent {

  orderForm = this.fb.group({
    title: ['', Validators.required],
    quantity: ['', [Validators.required, Validators.max(5)]],
    date: ['', Validators.required],
    contact: ['', [Validators.required, Validators.email]],
    payments: this.fb.array([])
  })
  
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // get Observable from FormGroup
    this.orderForm.valueChanges
    //listen to value change
    .subscribe(value => {
      console.log("orderForm value changes : ", value);
      
    })
  }

  onSubmit() {
    console.log('orderForm submitted : ', this.orderForm.value);
  }

  addPayments() {
    // create formgroup with 2 form control
    const PaymentForm = this.fb.group({
      date: ['', [Validators.required, MinDateValidator(new Date())]],
      amount: ['', Validators.required]
    });

    const payments = this.orderForm.get('payments') as FormArray;

    payments.push(PaymentForm);
  }

  get payments(): FormArray {
    // convert abstract control to FormArray
    return this.orderForm.get('payments') as FormArray;
  }
}
