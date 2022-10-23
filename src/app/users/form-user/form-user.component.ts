import { User } from './../../core/Model/User';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {

  User : User;
  ListUsers : User[];

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    this.ListUsers.push(this.User);
    console.log(this.ListUsers);
  }

}
