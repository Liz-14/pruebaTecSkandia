import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { CardList } from '../../domain/interfaces/card.interface';

@Injectable({
  providedIn: 'root'
})
export class CardApiService {

  private httpClient = inject(HttpClient);
  private url = environment.objectiveApiUrl;

  constructor() { }

  getCardResponse (): Observable<CardList>{
    return this.httpClient
    .get<CardList>(this.url)
    .pipe()
  }
}
