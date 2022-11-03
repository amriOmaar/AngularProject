import { Product } from './../Model/Product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  public all: Product[]= [
    {
      id : 2,
      title :"Pull Women",
      price : 60 ,
      description : "Pull col roulé Homme Automne et hiver Manches longues Tricoté Simple Torsion à la Mode Décontractée Noir",
      image : "https://www.cdiscount.com/pdt2/0/3/1/1/700x700/mp55792031/rw/pull-col-roule-homme-automne-et-hiver-manches-long.jpg",
      nbrLike : 20,
      category: 'women',
      quantite : 0
      },
      {
        id : 6,
          title :"Sweatshirt",
          price : 80,
          description : "Sweat-shirt Naruto - Ramen Ichiraku Naruto Sweat-shirt à capuche Manches longues Poches Ventrale Sérigraphie Verso",
          image : "https://www.cdiscount.com/pdt2/7/1/2/1/550x550/mp53166712/rw/sweatshirt-a-capuche-jack-jones-logo-noir-m.jpg",
          nbrLike : 100,
          category: 'men',
          quantite : 10
      },
      {
        id : 10,
        title :"Hoodie",
        price : 10,
        description : "Hoodie Classique Rick Sweatshirt à capuche harajuku Noir-Orange",
        image : "https://www.cdiscount.com/pdt2/8/8/4/1/700x700/mp53213884/rw/hoodie-classique-rick-sweatshirt-a-capuche-harajuk.jpg",
        nbrLike : 20,
        category: 'men',
        quantite : 10
        },
        {
          id : 14,
            title :"Sweat women",
            price : 120,
            description : "Homme Sweat Zippé Attack on Titan Fans Hoodies 3D Imprimé Capuche Veste Sweat-shirt Pull Vert",
            image : "https://www.cdiscount.com/pdt2/2/2/5/1/550x550/mp27315225/rw/homme-sweat-zippe-attack-on-titan-fans-hoodies-3d.jpg",
            nbrLike : 60,
            category: 'women',
            quantite : 10
        }

    ]

  constructor() { }

  updateProduit(product: Product){
    for(let p of this.all){
      if(p.id===product.id){
        p=product
      }
  }


  }


}
