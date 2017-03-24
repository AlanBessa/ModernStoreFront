import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CartService {
    public items: any[] = [];

    cartChange: Observable<any>;
    cartChangeObserver: Observer<any>;

    constructor() {
        this.cartChange = new Observable((observer: Observer<any>) => {
            this.cartChangeObserver = observer;
        });
    }

    addItem(item) {
        this.items.push(item);
        this.cartChangeObserver.next(this.items);
    }
}