import { Component } from '@angular/core';
import { Product } from './product';
import { ProductsService } from './products.service';

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
    providers: [ProductsService]
})
export class ProductsComponent { 

    prod: Product[];

    constructor(private productService: ProductsService) {
        this.productService.getProducts().subscribe(products => {
            this.prod = products;
        })
    }


    addProduct(id: string) {
        this.productService.addProduct(id).subscribe(product => {
            this.prod.push(product);
        });
    }


}