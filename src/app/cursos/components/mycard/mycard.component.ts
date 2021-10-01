import { Component, OnInit,Input } from '@angular/core';
import { curso } from '../../models';

@Component({
  selector: 'app-mycard',
  templateUrl: './mycard.component.html',
  styleUrls: ['./mycard.component.css']
})
export class MycardComponent implements OnInit {
@Input() tema:any;
  constructor() { }

  ngOnInit(): void {
  }

}
