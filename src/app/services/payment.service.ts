import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Payment } from '../models/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  payment = new Payment();
  storePay = false;

  constructor() { }
  
  public getPayment() {
    return this.payment;
  }

  public isStorePay() : boolean {
    return this.storePay;
  }

  public updatePayment(payment: FormGroup, storePay: boolean) {
    this.payment.creditCard = payment.get('creditCard')?.value;
    this.payment.creditCardDate = payment.get('creditCardDate')?.value;
    this.payment.creditCardCvv = payment.get('creditCardCvv')?.value;
    this.storePay = storePay;
  }
}
