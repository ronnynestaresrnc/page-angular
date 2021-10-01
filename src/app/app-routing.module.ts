import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './cursos/pages/about/about.component';
import { CharacterComponent } from './cursos/pages/character/character.component';
import { GaleriaComponent } from './cursos/pages/galeria/galeria.component';

const routes: Routes = [
  { path: 'home',   component:AboutComponent },
   { path: 'character',   component:CharacterComponent },
      { path: 'galeria',   component:GaleriaComponent },
 { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
