import { Injectable, OnInit } from '@angular/core';
import { medicinArray } from '../const/allArray';
import { medicinArr } from '../models/interface';

@Injectable({
  providedIn: 'root'
})
export class MedicineArrayService  {
  medicineInfo: Array<medicinArr> = medicinArray

  
  constructor() { }


  ngOnInit(): void {
  }


  getAllmedicineinfo(): Array<medicinArr>{
   return  this.medicineInfo
  }

  

}
