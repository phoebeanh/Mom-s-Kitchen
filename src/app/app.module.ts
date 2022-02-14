import { MenuComponent } from './components/menu/menu.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MenuItemDetailsComponent } from './components/menu-item-details/menu-item-details.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
//firebase
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingInfoComponent } from './components/booking-info/booking-info.component';
import { PaymentComponent } from './components/payment/payment.component';
import { NgxCcModule } from 'ngx-cc';
import { CompleteComponent } from './components/complete/complete.component';
import {MatListModule} from '@angular/material/list';

const appRoutes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      component: MenuComponent
  },  
  {
      path: 'shopping-cart',
      component: ShoppingCartComponent
  },
  { path: 'item', component: MenuItemDetailsComponent },
  { path: 'booking', component: BookingInfoComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'complete', component: CompleteComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ShoppingCartComponent,
    HeaderBarComponent,
    MenuItemDetailsComponent,
    BookingInfoComponent,
    PaymentComponent,
    CompleteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    provideFirestore(() => getFirestore()),
    RouterModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatDividerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    NgxCcModule,
    MatListModule
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
