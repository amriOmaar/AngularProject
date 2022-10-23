import { UserService } from './../../core/services/user.service';
import { User } from './../../core/Model/User';
import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  public List: User[];
  public nomUser : String;

  constructor(private userService : UserService) { }

  ngOnInit(): void {

    this.List= this.userService.ListUsers;
  }

  suppUser(user : User){
    //console.log("Helo");
    let i = this.List.indexOf(user);
    this.List.splice(i, 1);
    }


}
