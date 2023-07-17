import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';
import { Cocktail } from 'src/models/cocktail';

@Injectable({
  providedIn: 'root'
})

export class BackendAccessService {



  constructor(private http: HttpClient) { }


  getCocktailsList(): Observable<Cocktail[]> {
    return this.http.get('./assets/data.json').pipe(
      map((response: any) => response.data)
    );
  }
}
