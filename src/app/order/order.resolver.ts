import { OrderStore } from './store/order.store';
import { Order } from './order.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as auth from 'firebase/auth';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OrderResolver implements Resolve<boolean> {

    constructor(private http: HttpClient) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        // auth.onAuthStateChanged(auth.getAuth(),
        //     user => {
        //         if (user) {
        //             this.http.get<Order[]>("https://eshop-rahul-default-rtdb.firebaseio.com/orders/" + user.uid + ".json").subscribe(
        //                 orders => {
        //                     if (orders) {
        //                         this.orderStore.ClearOrder();
        //                         for (let order of orders) {
        //                             this.orderStore.AddToOrder(order);
        //                         }
        //                     }
        //                 }
        //             );
        //         }
        //     }
        // );
        return true;
    }
}
