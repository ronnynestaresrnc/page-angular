import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MycardComponent } from './components/mycard/mycard.component';
import { MybannerComponent } from './components/mybanner/mybanner.component';
import { AboutComponent } from './pages/about/about.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { ConsultComponent } from './components/consult/consult.component';
import { MyDataService } from './services/my-data.service';
import { CharacterComponent } from './pages/character/character.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { InsaneService } from './services/insane.service';



@NgModule({
  providers:[MyDataService,InsaneService],
  declarations: [

    MycardComponent,
 
    MybannerComponent,
    AboutComponent,
    CursosComponent,
    ConsultComponent,
    CharacterComponent,
    GaleriaComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    AboutComponent,CharacterComponent,GaleriaComponent


  ]
})
export class CursosModule { }
