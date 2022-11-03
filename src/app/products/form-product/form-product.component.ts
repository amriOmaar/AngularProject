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

  product : Product;


  constructor(private productService: ProductService,
    private route: Router) { }

  ngOnInit(): void {
    this.product = new Product();

  }

  save(){
    this.product.nbrLike=0;
    this.productService.all.push(this.product);
    this.route.navigate(["product/list"])

  }

  update(){
    this.productService.updateProduit(this.product)
    this.route.navigate(['/product/list'])
  }


}
