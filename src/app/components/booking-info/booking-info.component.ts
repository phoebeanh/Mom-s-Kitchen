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
  shipping = false;

  locations = [
    'Custom Delivery Unit 8-10 -18 Mollard Court, Barrie, ON', 
    'PenguinPickUp 651 Upper James St, Unit B Hamilton, ON',
    'Dicom 192 Hickson Avenue, Unit 10 Kingston, ON',
    'Custom Delivery 259 Gage Ave. Kitchener, ON',
    'Custom Delivery 1040 Wharncliffe Rd S. London, ON',
    'PenguinPickUp 31 - 9325 Yonge Street Richmond Hill, ON',
    'Custom Delivery 4525 Rhodes Dr (Unit #600) Windsor, ON',
    'PenguinPickUp 68 Abell Street Toronto, ON'
  ];
  zipCodes = ['L4N 8Y1','L9C 5R8','K7K 2N9','N2M 2C9','N6L 1H2','L4C 0A8','N8W 5R8','M6J 0B1'];
  submitted = false;

  bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      contactNumber: ['',  Validators.compose([Validators.required, Validators.minLength(10)])],
      shippingInfo: this.fb.group({
        pickup: [{value:null, disabled: true}],
        zipcode: [{value:null, disabled: true}],
        deliveryAddress: [{value:null, disabled:true}]
      } )
  });



  constructor(private router: Router, 
    public cartService: ShoppingCartService, 
    public itemService: ItemService, 
    public bookingService: BookingService, 
    public fb: FormBuilder) {
    this.nav = this.router.getCurrentNavigation();
  }

  ngOnInit(): void {
    console.log(this.bookingForm.get('shippingInfo')?.valid);
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

    this.shipping = true;
  }

  onSubmit() {
    this.bookingService.updateBooking(this.bookingForm);
    this.router.navigate(['/payment']);
  }

}
