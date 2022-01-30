import { MenuComponent } from './components/menu/menu.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import { MenuItemDetailsComponent } from './components/menu-item-details/menu-item-details.component';
//firebase
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

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
  { path: 'items/:itemId', component: MenuItemDetailsComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ShoppingCartComponent,
    HeaderBarComponent,
    MenuItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    RouterModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatDividerModule,
    AngularFirestoreModule
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
