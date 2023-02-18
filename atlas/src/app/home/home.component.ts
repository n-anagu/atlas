import { Component } from '@angular/core';
import { regionsUrlSegment } from '../consts';
import { regions } from '../data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly title = 'Wybierz region';
  readonly regions = regions;
  readonly regionsUrlSegment = regionsUrlSegment;
}
