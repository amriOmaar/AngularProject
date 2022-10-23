  import { Product } from './../../core/Model/Product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  Product : Product;
  ListProd : Product[];

  constructor() { }

  ngOnInit(): void {
    this.Product = new Product();
    this.ListProd = [];
  }

  save(){
    this.ListProd.push(this.Product);
    console.log(this.ListProd);
  }

}
