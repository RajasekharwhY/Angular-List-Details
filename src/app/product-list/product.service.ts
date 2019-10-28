import { Injectable } from '@angular/core';
import { products } from '../products'
import {HttpClient} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn : 'root'
  
})
export class prodcutListService
{
   private productUrl = 'assets/products/products.json';
  constructor(private http: HttpClient ) 
  {

  }
  
 getProductsObjserable(): Observable<any> {
    return this.http.get<any>(this.productUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
       
      );
  }

  getProdcut(id : number)
  {
    return {
         'id' : id,
         'name': 'Phone Standard',
         'price': 299,
         'description': 'it is a standard phone'
       }
  }


  getProducts() : any
    {
      return [
  {
    id : 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    id : 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    id : 3,
    name: 'Phone Standard',
    price: 299,
    description: 'it is a standard phone'
  }
];
    }
}