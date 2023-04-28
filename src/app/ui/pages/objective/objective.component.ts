import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { InformationComponent } from '../../components/information/information.component';
import { CardsComponent } from '../../components/cards/cards.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-objective',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    InformationComponent,
    CardsComponent,
    FooterComponent
  ],
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.scss']
})
export class ObjectiveComponent {

}
