import { Injectable } from '@angular/core';
import {tema} from '../models'
import { temas} from '../data/insane'
@Injectable({
  providedIn: 'root'
})
export class InsaneService {
  temas : tema[] = []

  constructor() { }
  getTemas(){

    return this.temas =temas
  }
}
