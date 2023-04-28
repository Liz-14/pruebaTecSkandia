import { CardList } from '../../../domain/interfaces/card.interface';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardApiService } from '../../../platform/service/card-api.service';
import { Observable } from 'rxjs';
import { HeaderComponent } from '../../components/header/header.component';
import { InformationComponent } from '../../components/information/information.component';

@Component({
  selector: 'app-objective',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    InformationComponent
  ],
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.scss']
})
export class ObjectiveComponent {

  private readonly cardApiSvc = inject(CardApiService);
  cardList$!: Observable<CardList>;

  constructor() {
    this.cardList$ = this.cardApiSvc.getCardResponse();
  }
}
