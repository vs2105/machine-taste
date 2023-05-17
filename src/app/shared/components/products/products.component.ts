import { Component, OnInit } from '@angular/core';
import { MedicineArrayService } from '../../services/medicine-array.service';
import { medicinArr } from '../../models/interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  ProdutArr :Array<medicinArr> = []
  constructor(private _medicineArrayService:MedicineArrayService) { }

  ngOnInit(): void {
   this.ProdutArr = this._medicineArrayService.getAllmedicineinfo()
  }

}
