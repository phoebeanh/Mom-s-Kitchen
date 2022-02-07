import { Observable, combineLatest, map, combineLatestAll } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Entree } from '../models/entree';
import { Items } from '../models/items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  all: Observable<Items>;

  constructor(private db : AngularFirestore) {
     let appetizers = this.db.collection<Entree>("Appetizers").valueChanges();
     let bread = this.db.collection<Entree>("Bread").valueChanges();
     let breakfast = this.db.collection<Entree>("BreakfastMenu").valueChanges();
     let curry = this.db.collection<Entree>("Curry").valueChanges();
     let desserts = this.db.collection<Entree>("Desserts").valueChanges();
     let drinks = this.db.collection<Entree>("Drinks").valueChanges();
     let rice = this.db.collection<Entree>("Rice").valueChanges();
     let snacks = this.db.collection<Entree>("Snacks").valueChanges();
     let soups = this.db.collection<Entree>("Soups").valueChanges();

    this.all = combineLatest({
      appetizers: appetizers,
      bread: bread,
      breakfast: breakfast,
      curry: curry,
      desserts: desserts,
      drinks: drinks,
      rice: rice,
      snacks: snacks,
      soups: soups
    });
  }

  getAll(): Observable<Items> {
    return this.all;
  }

  // create(data: Entree, name : string) {
  //   return this.db
  //   .collection("Items/" + name)
  //   .add(data);
  // }

//   update(data : Entree) {
//     return this.db
//       .doc('Entrees/' + data.idField)
//       .update(data);
//  }

//  delete(data: Entree) {
//   return this.db
//       .doc("Entrees/" + data.idField)
//       .delete();
//   }
}
