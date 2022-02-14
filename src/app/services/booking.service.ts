import { Booking } from './../models/booking';
import { FormGroup, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  booking: Booking = new Booking();

  constructor() {}

  public getBooking() {
    return this.booking;
  }

  public updateBooking(booking: FormGroup) {
    this.booking.name = booking.get('name')?.value;
    this.booking.email = booking.get('email')?.value;
    this.booking.contactNumber = booking.get('contactNumber')?.value;
    this.booking.pickup = booking.get('shippingInfo.pickup')?.value;
    this.booking.zipcode = booking.get('shippingInfo.zipcode')?.value;
    this.booking.deliveryAddress = booking.get('shippingInfo.deliveryAddress')?.value;
  }
}
