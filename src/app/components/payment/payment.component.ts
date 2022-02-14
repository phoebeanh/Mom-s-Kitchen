import { PaymentService } from './../../services/payment.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { ActivatedRoute, Router, Navigation } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';
import { ItemService } from 'src/app/services/item.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  storePay = false;

  form = this.fb.group({
    creditCard: [],
    creditCardDate: [],
    creditCardCvv: [],
  });

  constructor(public cartService: ShoppingCartService,
    public itemService: ItemService, 
    public bookingService: BookingService,
    public paymentService: PaymentService,
    private router: Router, 
    private fb: FormBuilder) {}

    onChange(event: MatRadioChange) {
      if (event.value=="credit" || event.value=="debit") {
        this.form.enable();
        this.storePay = false;
      } else {
        this.form.disable();
        this.storePay = true;
      }
    }

    ngOnInit() {}

    onClick() {
      this.paymentService.updatePayment(this.form, this.storePay);
      this.router.navigate(['/complete']);
    }

}
