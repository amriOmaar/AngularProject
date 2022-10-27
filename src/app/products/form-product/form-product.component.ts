import { ProductService } from './../../core/services/product.service';
  import { Product } from './../../core/Model/Product';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  Product : Product;


  constructor(private productService: ProductService,
    private route: Router) { }

  ngOnInit(): void {
    this.Product = new Product();

  }

  save(){
    this.productService.all.push(this.Product);
    this.route.navigate(["product/list"])

  }

}
