import { Injectable } from '@angular/core';
import { myData } from '../data/myData';
import { curso } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MyDataService {
    cursos: curso[] = [];
  constructor() {
    
   }
  getCursos(){
    return this.cursos = myData;
  }
}
