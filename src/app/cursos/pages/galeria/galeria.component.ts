import { Component, OnInit } from '@angular/core';
import { InsaneService } from '../../services/insane.service';

import {tema} from './../../models'
@Component({
  selector: 'app-galeria',
  template:  `<div class="container py-5" >
                   <div class="row row-cols-1 row-cols-md-3 g-4">
             <app-mycard *ngFor="let tema of temas" [tema]="tema" ></app-mycard>
         </div>
</div> `,
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
temas :tema[] =[]
  constructor(private insaneservice:InsaneService) {

this.temas = this.insaneservice.getTemas();
    
   }

  ngOnInit(): void {
  }

}
