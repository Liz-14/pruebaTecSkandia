import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Card, CardList } from '../../domain/interfaces/card.interface';

@Injectable({
  providedIn: 'root'
})
export class CardApiService {

  private httpClient = inject(HttpClient);
  private url = environment.objectiveApiUrl;

  constructor() { }

  getCardResponse (): Observable<Card[]>{
    return this.httpClient
    .get<CardList>(this.url)
    .pipe(map((response: CardList) => response.listCard))
  }
}
