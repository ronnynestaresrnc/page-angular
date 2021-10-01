import { Injectable } from '@angular/core';
import { Apollo, gql } from "apollo-angular";
import { take, tap } from "rxjs/operators";
import { BehaviorSubject } from 'rxjs';
import { character } from '../models';
const QUERY = gql`{
  characters {

    results {
      name
      status
      species
      type
      gender
      image
    }
  }
}
`;

@Injectable({
  providedIn: 'root'
})

export class RickandmortyService {
  private charactersSubject = new BehaviorSubject<character[]>([]);

  characters$ = this.charactersSubject.asObservable();
  constructor(private apollo: Apollo) {
    this.getDataApi();
  }

  getDataApi(): void {

         this.apollo.watchQuery<any>({
            query: QUERY
         }).valueChanges
         .pipe(
          take(1),
          tap(({ data }) => {
                  const { characters } = data;
                  this.charactersSubject.next(characters.results);
           })
    ).subscribe();
  }
}
