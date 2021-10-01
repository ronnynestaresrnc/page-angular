import { Component, OnInit } from '@angular/core';
import { curso } from '../../models';
import { MyDataService } from '../../services/my-data.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
cursoElegido:any
cursos:curso[];
  constructor(private mydataservice:MyDataService ) { 

     this.cursos = this.mydataservice.getCursos();
      console.log(this.cursos)

  }
  ngOnInit(): void {
  
  }
  getCurso(cursoSeleccionado:curso) :void{
    this.cursoElegido = cursoSeleccionado;

  }

}
