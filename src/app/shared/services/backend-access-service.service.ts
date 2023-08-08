import { Observable, map } from 'rxjs';
import { Cocktail } from '../constants/models/cocktail';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface responseType {
    data: Cocktail[];
}

@Injectable({
    providedIn: 'root',
})
export class BackendAccessService {
    constructor(private readonly http: HttpClient) {}

    getCocktailsMenu(): Observable<Cocktail[]> {
        return this.http.get<responseType>('./assets/data.json').pipe(map((response: responseType) => response.data));
    }
}
