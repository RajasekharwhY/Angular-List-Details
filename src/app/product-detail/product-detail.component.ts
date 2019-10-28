import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'


@Component({
  selector : "product-detail",
  templateUrl : "./product-detail.component.html",
  styleUrls :  ["./product-detail.component.css"]

})
export class ProductDetailComponent implements OnInit
{
  product : any;
  pageTitle = 'Product Detail';
  constructor(private route: ActivatedRoute, 
             ) { 
  }

  ngOnInit()
  {
       let id = +this.route.snapshot.paramMap.get('id');
       this.product = {
         'id' : id,
         'name': 'Phone Standard',
         'price': 299,
         'description': 'it is a standard phone'
       }
  }
}