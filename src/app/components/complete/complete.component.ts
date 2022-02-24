import { PaymentService } from './../../services/payment.service';
import { BookingService } from 'src/app/services/booking.service';
import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { Payment } from 'src/app/models/payment';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  confirmationNumber : number;
  booking: Booking = new Booking();
  payment: Payment = new Payment();
  date = new Date();

  last4Digits: string = '';

  isStorePay: boolean = false;

  constructor(public cartService: ShoppingCartService,
    public bookingService: BookingService,
    public paymentService: PaymentService) {
      this.confirmationNumber = Math.floor(100000 + Math.random() * 900000);
    }

  ngOnInit(): void {
    this.booking = this.bookingService.getBooking();
    this.payment = this.paymentService.getPayment();
    this.isStorePay = this.paymentService.isStorePay();

    if(!this.isStorePay) {
      this.last4Digits = this.payment.creditCard.substring(this.payment.creditCard.length-4);
    }

    this.cartService.clearCart();
    
  }

}
