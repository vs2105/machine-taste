import { Injectable } from '@angular/core';
import { orderArr } from '../models/interface';
import { orderArray } from '../const/allArray';

@Injectable({
  providedIn: 'root'
})
export class OrderArrayService {
  orderinfo:Array<orderArr>=orderArray
  constructor() { }

  getAllorderdata():Array<orderArr>{
    return  this.orderinfo
  }
}
