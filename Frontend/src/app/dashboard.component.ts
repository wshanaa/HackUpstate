import { Component } from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent { 

    private about: boolean = false;
    private products: boolean = false;
    private cart: boolean = false;

    setAbout() {
        if (this.about === false) {
            this.about = true;
            this.products = false;
            this.cart = false;
        } else {
            this.about = false;
        }
    }

    setProducts() {
        if (this.products === false) {
            this.products = true;
            this.cart = false;
            this.about = false;
        } else {
            this.products = false;
        }
    }

    setCart() {
        if (this.cart === false) {
            this.cart = true;
            this.about = false;
            this.products = false;
        } else {
            this.cart = false;
        }
    }




}
