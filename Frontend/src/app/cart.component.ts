import { Component } from '@angular/core';
import { Product } from './product';
import { ProductsService } from './products.service';

@Component({
    selector: 'cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
    providers: [ProductsService]
})
export class CartComponent {

    prod: Product[];
    route: boolean = false;

    constructor(private productService: ProductsService) {
        this.productService.getCart().subscribe(products => {
            this.prod = products;
        })
    }

    deleteProduct(id: string) {
        var prods = this.prod;


        this.productService.deleteProduct(id).subscribe(product => {
            for (var i = 0; i < prods.length; i++) {
                if (prods[i]._id == id) {
                    prods.splice(i, 1);
                }
            }
        });
    }

    getRoute() {
        if (this.route === false) {
            this.route = true;
        } else {
            this.route = false;
        }
    }

 }