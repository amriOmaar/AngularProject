import { ProductService } from './../../core/services/product.service';
import { Product } from './../../core/Model/Product';
import { StatsService } from './../../core/services/stats.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public title : String;
  public List : Product[];
  public all : Product[];

  public newPrice : number;
  public titleProd : String;

  public count: number

  constructor(private route:ActivatedRoute,
    private Stats:StatsService, private ProductService: ProductService) {

   }

  ngOnInit(): void {

    this.count=this.Stats.getCount(this.all,'quantite',0)

    this.all=this.ProductService.all

    //category
    console.log(this.route);
    let category= this.route.snapshot.params['category'];


      this.route.params.subscribe(
        (params)=>{
          if (params['category']!=null){
                this.List = this.all.filter((Product)=>
                    Product.category == params['category']
                )
          }else{
            this.List = this.all
          }
        }
      )




  }



  like(p : Product){
    let i = this.List.indexOf(p);
    if (i != -1){
      this.List[i].nbrLike++;
      // connect to the backend side

    }
  }

  buyProduct(p : Product){
    let i = this.List.indexOf(p);
    if (i != -1){
      this.List[i].quantite--;
      // connect to the backend side

      this.count= this.Stats.getCount(this.List,'quantite',0)


    }
  }
}
