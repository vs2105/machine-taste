import { Injectable } from '@angular/core';
import { UserArr } from '../models/interface';
import { UserArray } from '../const/allArray';

@Injectable({
  providedIn: 'root'
})
export class UserArrayService {
 userInfo:Array<UserArr> = UserArray

  constructor() { }

  getallusersdata(): Array<UserArr>{
   return this.userInfo
  }

}
