import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../core/services/product.service';
import { Product } from './../../core/Model/Product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  public listProd: Product[]
  public prod: Product

  constructor(private ProductService: ProductService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {

this.listProd=this.ProductService.all.filter(p => p.quantite==0)

this.route.params.subscribe(
  (params)=>{
    if (params['id']!=null){
          this.listProd = this.ProductService.all.filter((Product)=>
              Product.id == params['id']
          )
    }else{
      this.listProd = this.ProductService.all
    }
  }
)
  }

  suppProduct(prod : Product){
    let index = this.listProd.indexOf(prod)
    this.listProd.splice(index, 1)
    // let i = this.ProductService.all.indexOf(prod);
    // this.ProductService.all.splice(i, 1);

    }

    updateProduct(prod : Product){
      let index = this.listProd.indexOf(prod)
      this.listProd.splice(index, 1)
      // let i = this.ProductService.all.indexOf(prod);
      // this.ProductService.all.splice(i, 1);

      }






}
