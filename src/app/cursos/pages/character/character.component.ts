import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from '../../services/rickandmorty.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
characters$   = this.rickandmorty.characters$;
  constructor(private rickandmorty:RickandmortyService) { }

  ngOnInit(): void {
  }

}
