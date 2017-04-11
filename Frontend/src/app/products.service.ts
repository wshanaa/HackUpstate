import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {

    constructor(private http: Http) {
        console.log("WORKING!");
    }

    getProducts() {
        return this.http.get('http://localhost:8000/api/items').map(res => res.json());
    }

    getCart() {
        return this.http.get('http://localhost:8000/api/user/58e9b269734d1d458ddb73bc/list/').map(res => res.json());
    }

    addProduct(id: string) {
        console.log(id);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8000/api/user/58e9b269734d1d458ddb73bc/list/', {id: id},{headers: headers}).map(res => res.json());
    }
    
    deleteProduct(id: string) {
        return this.http.delete('http://localhost:8000/api/user/58e9b269734d1d458ddb73bc/list/'+id);
    }


}