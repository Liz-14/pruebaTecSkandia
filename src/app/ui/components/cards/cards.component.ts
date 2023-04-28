import { Card, CardList } from '../../../domain/interfaces/card.interface';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardApiService } from '../../../platform/service/card-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  private readonly cardApiSvc = inject(CardApiService);
  /**
   * Observable que almacenara los datos que se mostraran en las cards
   */
  cardList$!: Observable<Card[]>;

  /**
   * Constructor del componente
   */
  constructor() {
    /**
     * Llamado la servicio y asignacion de datos a variable
     */
    this.cardList$ = this.cardApiSvc.getCardResponse();
  }
}
