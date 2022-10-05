import { footballer } from './../Model/footballer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footballer',
  templateUrl: './footballer.component.html',
  styleUrls: ['./footballer.component.css']
})
export class FootballerComponent implements OnInit {
  public liste_footballer : footballer[];

  constructor() { }

  ngOnInit(): void {

    liste_footballer : this.liste_footballer =
    [
      {
        id : 2,
        nom : "Bruno Fernandes",
        age : 28,
        nationnalite : "Portugaise",
        team : "Manchester United",
        image : "https://www.pngarts.com/files/6/Bruno-Fernandes-Portuguese-Footballer-PNG.png",
        nbrLike : 30
      },
      {
        id : 4,
        nom : "Cristiano Ronaldo",
        age : 37,
        nationnalite : "Portugaise",
        team : "Manchester United",
        image : "https://www.citypng.com/public/uploads/preview/png-cristiano-ronaldo-cr7-manchester-united-31630453790pqhantyyxi.png",
        nbrLike : 100
      },
      {
        id : 10,
        nom : "Marcus Rashford",
        age : 24,
        nationnalite : "Britannique",
        team : "Manchester United",
        image : "https://www.pngplay.com/wp-content/uploads/13/Marcus-Rashford-Transparent-PNG.png",
        nbrLike : 60
      },
      {
        id : 12,
        nom : "Christian Eriksen",
        age : 30,
        nationnalite : "Danois",
        team : "Manchester United",
        image : "https://www.pngplay.com/wp-content/uploads/13/Christian-Eriksen-PNG-Free-File-Download.png",
        nbrLike : 86
      }
    ]


  }

  like_footballer(f : footballer){
    let i = this.liste_footballer.indexOf(f);
    if (i != -1){
      this.liste_footballer[i].nbrLike++;
  }

  }

}
