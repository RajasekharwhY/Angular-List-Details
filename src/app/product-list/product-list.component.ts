import { Component, OnInit } from "@angular/core";
import {prodcutListService} from "./product.service"
import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  
  constructor(private productService : prodcutListService)
  {

  }
  products : any;
  ngOnInit() : void{
       this.products = this.productService.getProducts();
       //this.productService.getProducts().subscribe({
     // next: products => { this.products = products; }      
   // });
    }

  share() {
    window.alert("The product has been shared!");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
