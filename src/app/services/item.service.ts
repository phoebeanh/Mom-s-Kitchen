import { Observable } from 'rxjs';
import { Item, items } from './../item';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Entree } from '../models/entree';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  // private items = items;
  entrees: Observable<any[]>;

  constructor(private db : AngularFirestore) {
    this.entrees = this.db.collection("Entrees").valueChanges();
  }

  // getItems() : Item[] {
  //   return this.items;
  // }

  getAll(): Observable<Entree[]> {
    return this.entrees;
  }

  create(data: Entree) {
    return this.db
    .collection("Entrees")
    .add(data);
  }

  update(data : Entree) {
    return this.db
      .doc('Entrees/' + data.idField)
      .update(data);
 }

 delete(data: Entree) {
  return this.db
      .doc("Entrees/" + data.idField)
      .delete();
  }
}
