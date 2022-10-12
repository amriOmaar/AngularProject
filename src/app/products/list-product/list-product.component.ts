import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../core/Model/Product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public title : String;
  public List : Product[];

  public newPrice : number;
  public titleProd : String;

  constructor(private route:ActivatedRoute) {

   }

  ngOnInit(): void {
    console.log(this.route);
    this.title= "Store";
    this.List = [
      {
        id : 2,
        title :"Pull",
        price : 60 ,
        description : "Pull col roulé Homme Automne et hiver Manches longues Tricoté Simple Torsion à la Mode Décontractée Noir",
        image : "https://www.cdiscount.com/pdt2/0/3/1/1/700x700/mp55792031/rw/pull-col-roule-homme-automne-et-hiver-manches-long.jpg",
        nbrLike : 20,
        quantite : 10
        },
        {
          id : 6,
            title :"Sweatshirt",
            price : 80,
            description : "Sweat-shirt Naruto - Ramen Ichiraku Naruto Sweat-shirt à capuche Manches longues Poches Ventrale Sérigraphie Verso",
            image : "https://www.cdiscount.com/pdt2/7/1/2/1/550x550/mp53166712/rw/sweatshirt-a-capuche-jack-jones-logo-noir-m.jpg",
            nbrLike : 100,
            quantite : 10
        },
        {
          id : 10,
          title :"Hoodie",
          price : 10,
          description : "Hoodie Classique Rick Sweatshirt à capuche harajuku Noir-Orange",
          image : "https://www.cdiscount.com/pdt2/8/8/4/1/700x700/mp53213884/rw/hoodie-classique-rick-sweatshirt-a-capuche-harajuk.jpg",
          nbrLike : 20,
          quantite : 10
          },
          {
            id : 14,
              title :"Sweat",
              price : 120,
              description : "Homme Sweat Zippé Attack on Titan Fans Hoodies 3D Imprimé Capuche Veste Sweat-shirt Pull Vert",
              image : "https://www.cdiscount.com/pdt2/2/2/5/1/550x550/mp27315225/rw/homme-sweat-zippe-attack-on-titan-fans-hoodies-3d.jpg",
              nbrLike : 60,
              quantite : 10
          }

      ]
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


    }
  }
}
