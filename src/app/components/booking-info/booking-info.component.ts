import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { MatRadioChange } from '@angular/material/radio';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking-info',
  templateUrl: './booking-info.component.html',
  styleUrls: ['./booking-info.component.css']
})
export class BookingInfoComponent implements OnInit {

  nav: any;

  locations = ['North Location', 'South Location'];
  zipCodes = ['V8B001', 'V8B002', 'V8B231', 'V8B456'];
  submitted = false;

  bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      contactNumber: ['',  Validators.required],
      shippingInfo: this.fb.group({
        pickup: [{value:null, disabled: true}],
        zipcode: [{value:null, disabled: true}],
        deliveryAddress: [{value:null, disabled:true}]
      }),
  });



  constructor(private router: Router, 
    public cartService: ShoppingCartService, 
    public itemService: ItemService, 
    public bookingService: BookingService, 
    public fb: FormBuilder) {
    this.nav = this.router.getCurrentNavigation();
  }

  ngOnInit(): void {
  }

  shippingChange(event: MatRadioChange) {
    if(event.value == 'pickup') {
      this.bookingForm.get(['shippingInfo', 'pickup'])?.enable();
      this.bookingForm.get(['shippingInfo', 'zipcode'])?.disable();
      this.bookingForm.get(['shippingInfo','deliveryAddress'])?.disable();
    } else if (event.value == 'delivery') {
      this.bookingForm.get(['shippingInfo','pickup'])?.disable();
      this.bookingForm.get(['shippingInfo', 'zipcode'])?.enable();
      this.bookingForm.get(['shippingInfo','deliveryAddress'])?.enable();
    }
  }

  onSubmit() {
    this.bookingService.updateBooking(this.bookingForm);
    this.router.navigate(['/payment']);
  }

}
