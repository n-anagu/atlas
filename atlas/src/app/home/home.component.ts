import { Component } from '@angular/core';
import { regions } from '../data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'Wybierz region';
  regions = regions;
}
