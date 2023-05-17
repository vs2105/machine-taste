import { Component, OnInit } from '@angular/core';
import { orderArr } from '../../models/interface';
import { OrderArrayService } from '../../services/order-array.service';

@Component({
  selector: 'app-order-array',
  templateUrl: './order-array.component.html',
  styleUrls: ['./order-array.component.scss']
})
export class OrderArrayComponent implements OnInit {
  orderArr:Array<orderArr>=[]
  constructor(private _orderArrayService:OrderArrayService) { }

  ngOnInit(): void {
    this.orderArr =this._orderArrayService.getAllorderdata()
  }

}
