import { Component, OnInit } from '@angular/core';
import { UserArr } from '../../models/interface';
import { UserArrayService } from '../../services/user-array.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userArr : Array<UserArr> =[]

  constructor(private _userArrayService:UserArrayService ) { }
  

  

  ngOnInit(): void {
    this.userArr = this._userArrayService.getallusersdata()
    
  }



}
