import { Component, OnInit } from '@angular/core';
import { User } from '../../core/Model/User';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  public List: User[];
  public nomUser : String;

  constructor() { }

  ngOnInit(): void {
    list : this.List =     [
      {
        id: 24,
        name: 'Omar Amri',
        job: 'Full Stack Developer',
        phone: '00216 24  405 246',
        email:'amri.omar@esprit.tn',
        address:'5 Boar Lane SELLING 2LG',
        picture:'https://bootdey.com/img/Content/avatar/avatar6.png'
      },
      {
        id: 1,
        name: 'James Nix',
        job: 'Full Stack Developer',
        phone: '046 5685 6969',
        email:'JamesNix@spy.com',
        address:'5 Boar Lane SELLING 2LG',
        picture:'https://bootdey.com/img/Content/avatar/avatar2.png'
      },
      {
        id: 2,
        name: 'Darlene Smith',
        job: 'UI/UX Designer',
        phone: '012 6587 1236',
        email:'DarleneSmith@spy.com',
        address:'57 Guildry Street GAMRIE',
        picture:'https://bootdey.com/img/Content/avatar/avatar3.png'
      },
      {
        id: 10,
        name: 'William Swift',
        job: 'Backend Developer',
        phone: '012 6587 1236',
        email:' WilliamSwift@spy.co',
        address:'80 South Street MONKW 7BR',
        picture:'https://bootdey.com/img/Content/avatar/avatar4.png'
      }
    ]

  }

  suppUser(user : User){
    //console.log("Helo");
    let i = this.List.indexOf(user);
    this.List.splice(i, 1);
    }


}
